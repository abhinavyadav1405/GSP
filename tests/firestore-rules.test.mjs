import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { after, test } from "node:test";
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from "@firebase/rules-unit-testing";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

const projectId = "demo-gsp-security-rules";
const env = await initializeTestEnvironment({
  projectId,
  firestore: {
    rules: readFileSync(new URL("../firestore.rules.candidate", import.meta.url), "utf8"),
  },
});

after(async () => {
  await env.cleanup();
});

test("public visitors can read public settings and complaints", async () => {
  await env.withSecurityRulesDisabled(async (context) => {
    const adminDb = context.firestore();
    await setDoc(doc(adminDb, "settings", "main"), { villageName: "Pahrajpur" });
    await setDoc(doc(adminDb, "problems", "sample"), { title: "Road repair" });
  });

  const visitor = env.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(visitor, "settings", "main")));
  await assertSucceeds(getDocs(collection(visitor, "problems")));
});

test("unauthenticated writes are denied", async () => {
  const visitor = env.unauthenticatedContext().firestore();
  await assertFails(setDoc(doc(visitor, "settings", "main"), { admin: true }));
  await assertFails(setDoc(doc(visitor, "users", "someone"), { role: "admin" }));
  await assertFails(setDoc(doc(visitor, "blockedUsers", "9999999999"), { mobile: "9999999999" }));
  await assertFails(setDoc(doc(visitor, "problems", "anonymous"), { title: "No auth" }));
});

test("signed-in non-admin users cannot mutate settings or other users", async () => {
  const user = env.authenticatedContext("user-123").firestore();
  await assertFails(setDoc(doc(user, "settings", "main"), { adminPassword: "changed" }));
  await assertFails(setDoc(doc(user, "users", "other-user"), { role: "admin" }));
  await assertFails(deleteDoc(doc(user, "problems", "sample")));
});

test("an admin claim permits admin-only settings and moderation writes", async () => {
  const admin = env.authenticatedContext("admin-123", { admin: true }).firestore();
  await assertSucceeds(setDoc(doc(admin, "settings", "main"), { villageName: "Pahrajpur" }));
  await assertSucceeds(setDoc(doc(admin, "blockedUsers", "9999999999"), { mobile: "9999999999" }));
  await assertSucceeds(deleteDoc(doc(admin, "problems", "sample")));
});

test("unknown collections and cross-user profile reads are denied", async () => {
  const user = env.authenticatedContext("user-123").firestore();
  await assertFails(getDoc(doc(user, "users", "other-user")));
  await assertFails(getDoc(doc(user, "privateData", "anything")));
});
