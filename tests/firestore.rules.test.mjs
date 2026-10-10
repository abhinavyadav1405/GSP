import { after, before, beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { doc, setDoc, updateDoc } from "firebase/firestore";

let testEnv;

before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: "demo-gsp-rules-tests",
    firestore: {
      rules: readFileSync(new URL("../firestore.rules", import.meta.url), "utf8"),
    },
  });
});

beforeEach(async () => {
  await testEnv.clearFirestore();
});

after(async () => {
  await testEnv.cleanup();
});

async function seed(path, id, data) {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    await setDoc(doc(context.firestore(), path, id), data);
  });
}

function userDb(id, claims = {}) {
  return testEnv.authenticatedContext(id, { gspUserId: id, ...claims }).firestore();
}

const validReport = {
  id: "report-1",
  userId: "reporter",
  userName: "Reporter",
  reason: "अन्य",
  details: "",
  createdAt: "2026-10-10T12:00:00.000Z",
};

test("signed-in users can create a problem only for their own claimed ID", async () => {
  await assertSucceeds(setDoc(doc(userDb("alice"), "problems", "alice-problem"), {
    authorId: "alice",
    title: "Street light",
    status: "In Progress",
  }));
  await assertFails(setDoc(doc(userDb("alice"), "problems", "spoofed-problem"), {
    authorId: "bob",
    title: "Spoofed post",
    status: "In Progress",
  }));
});

test("a user can append one valid report without changing existing reports", async () => {
  await seed("problems", "problem-1", {
    authorId: "author",
    title: "Street light",
    status: "In Progress",
    moderationStatus: "visible",
    reports: [],
  });

  await assertSucceeds(updateDoc(doc(userDb("reporter"), "problems", "problem-1"), {
    reports: [validReport],
    moderationStatus: "reported",
  }));
});

test("report updates cannot rewrite an earlier report", async () => {
  const original = { ...validReport, id: "old", userId: "someone-else" };
  await seed("problems", "problem-1", {
    authorId: "author",
    title: "Street light",
    status: "In Progress",
    moderationStatus: "reported",
    reports: [original],
  });

  await assertFails(updateDoc(doc(userDb("reporter"), "problems", "problem-1"), {
    reports: [{ ...original, reason: "edited old report" }, validReport],
    moderationStatus: "reported",
  }));
});

test("a user cannot submit a report under another user's ID or an unsupported reason", async () => {
  await seed("reels", "reel-1", {
    ownerId: "author",
    moderationStatus: "visible",
    videoDeleted: false,
    reports: [],
  });

  await assertFails(updateDoc(doc(userDb("reporter"), "reels", "reel-1"), {
    reports: [{ ...validReport, userId: "victim" }],
    moderationStatus: "reported",
  }));

  await assertFails(updateDoc(doc(userDb("reporter"), "reels", "reel-1"), {
    reports: [{ ...validReport, reason: "unsupported reason" }],
    moderationStatus: "reported",
  }));
});

test("non-admin users cannot delete another user's problem", async () => {
  await seed("problems", "problem-1", {
    authorId: "alice",
    title: "Street light",
    status: "In Progress",
  });
  const { deleteDoc } = await import("firebase/firestore");
  await assertFails(deleteDoc(doc(userDb("mallory"), "problems", "problem-1")));
});

test("signed-in users can add and remove only their own like/support and add their own comment", async () => {
  await seed("problems", "problem-1", {
    authorId: "author",
    title: "Street light",
    status: "In Progress",
    likes: [],
    supporters: [],
    comments: [],
  });
  const db = userDb("reporter");
  const problemRef = doc(db, "problems", "problem-1");

  await assertSucceeds(updateDoc(problemRef, { likes: ["reporter"] }));
  await assertSucceeds(updateDoc(problemRef, { likes: [] }));
  await assertSucceeds(updateDoc(problemRef, { supporters: ["reporter"] }));
  await assertSucceeds(updateDoc(problemRef, { comments: [{
    id: "comment-1",
    userId: "reporter",
    userName: "Reporter",
    text: "The street light is still broken.",
    createdAt: "2026-10-10T12:00:00.000Z",
  }] }));
});

test("users cannot alter problem status or add a like on behalf of another user", async () => {
  await seed("problems", "problem-1", {
    authorId: "author",
    title: "Street light",
    status: "In Progress",
    likes: [],
    comments: [],
  });
  const problemRef = doc(userDb("reporter"), "problems", "problem-1");
  await assertFails(updateDoc(problemRef, { status: "Resolved" }));
  await assertFails(updateDoc(problemRef, { likes: ["victim"] }));
  await assertFails(updateDoc(problemRef, { comments: [{
    id: "comment-1",
    userId: "victim",
    userName: "Victim",
    text: "Spoofed comment",
    createdAt: "2026-10-10T12:00:00.000Z",
  }] }));
});
