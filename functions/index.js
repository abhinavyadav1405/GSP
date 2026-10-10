const crypto = require("node:crypto");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");
const { getStorage } = require("firebase-admin/storage");

initializeApp();

const db = getFirestore();
const adminAuth = getAuth();
const storage = getStorage();
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const PBKDF2_ITERATIONS = 210000;

function normalizeId(value) {
  return String(value || "").trim().toLowerCase();
}
function stableUid(id) {
  return "gsp_" + crypto.createHash("sha256").update(id).digest("hex").slice(0, 40);
}
function legacyHash(password) {
  return crypto.createHash("sha256").update(password, "utf8").digest("hex");
}
function newCredential(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, 32, "sha256").toString("hex");
  return { salt, passwordHash, algorithm: "pbkdf2-sha256", iterations: PBKDF2_ITERATIONS };
}
function verifyCredential(password, credential) {
  if (!credential || typeof credential.passwordHash !== "string") return false;
  if (credential.algorithm === "pbkdf2-sha256" && credential.salt) {
    const actual = crypto.pbkdf2Sync(password, credential.salt, credential.iterations || PBKDF2_ITERATIONS, 32, "sha256");
    const expected = Buffer.from(credential.passwordHash, "hex");
    return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
  }
  if (credential.algorithm === "legacy-sha256") {
    const actual = Buffer.from(legacyHash(password), "hex");
    const expected = Buffer.from(credential.passwordHash, "hex");
    return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
  }
  return false;
}
function publicUser(data, id) {
  return {
    id,
    name: String(data.name || ""),
    mobile: String(data.mobile || ""),
    ward: String(data.ward || ""),
    createdAt: String(data.createdAt || new Date().toISOString()),
    ...(data.avatar ? { avatar: data.avatar } : {}),
  };
}
async function ensureFirebaseUser(id) {
  const uid = stableUid(id);
  try {
    await adminAuth.getUser(uid);
  } catch (error) {
    if (error.code !== "auth/user-not-found") throw error;
    await adminAuth.createUser({ uid, displayName: id });
  }
  return uid;
}
async function issueSession(id, user) {
  const uid = await ensureFirebaseUser(id);
  const customClaims = { gspUserId: id };
  const record = await adminAuth.getUser(uid);
  await adminAuth.setCustomUserClaims(uid, { ...(record.customClaims || {}), ...customClaims });
  const token = await adminAuth.createCustomToken(uid, customClaims);
  return { token, user };
}

exports.authenticateGspUser = onCall({ enforceAppCheck: false }, async (request) => {
  const id = normalizeId(request.data && request.data.id);
  const password = String(request.data && request.data.password || "");
  if (!/^[a-z0-9._-]{3,40}$/.test(id) || !password) {
    throw new HttpsError("invalid-argument", "ID ya password sahi nahi hai.");
  }

  const userRef = db.collection("users").doc(id);
  const userSnap = await userRef.get();
  if (!userSnap.exists) throw new HttpsError("not-found", "User ID nahi mila.");
  const profile = userSnap.data();
  const credentialRef = db.collection("userCredentials").doc(id);
  const credentialSnap = await credentialRef.get();
  let credential = credentialSnap.exists ? credentialSnap.data() : null;
  if (!credential && profile.passwordHash) {
    credential = { algorithm: "legacy-sha256", passwordHash: profile.passwordHash };
  }
  if (!verifyCredential(password, credential)) {
    throw new HttpsError("unauthenticated", "ID ya password sahi nahi hai.");
  }

  // Upgrade legacy hashes after a successful login and keep all credential
  // material out of the public users profile collection.
  await credentialRef.set(newCredential(password));
  if (profile.passwordHash) await userRef.update({ passwordHash: FieldValue.delete() });
  return issueSession(id, publicUser(profile, id));
});

exports.registerGspUser = onCall({ enforceAppCheck: false }, async (request) => {
  const id = normalizeId(request.data && request.data.id);
  const password = String(request.data && request.data.password || "");
  const name = String(request.data && request.data.name || "").trim();
  const mobile = String(request.data && request.data.mobile || "").trim();
  const ward = String(request.data && request.data.ward || "").trim();
  if (!/^[a-z0-9._-]{3,40}$/.test(id)) throw new HttpsError("invalid-argument", "User ID में 3–40 अक्षर, अंक, dot, underscore या hyphen रखें।");
  if (password.length < 8 || password.length > 128) throw new HttpsError("invalid-argument", "Password कम-से-कम 8 अक्षरों का होना चाहिए।");
  if (!name || mobile.replace(/\D/g, "").length < 10) throw new HttpsError("invalid-argument", "Name और valid mobile number required हैं।");

  const userRef = db.collection("users").doc(id);
  const credentialRef = db.collection("userCredentials").doc(id);
  if ((await userRef.get()).exists) throw new HttpsError("already-exists", "Ye User ID already registered hai.");
  const profile = { id, name, mobile, ward, createdAt: new Date().toISOString() };
  try {
    await userRef.create(profile);
    await credentialRef.create(newCredential(password));
  } catch (error) {
    await userRef.delete().catch(() => {});
    if (error.code === 6 || error.code === "already-exists") throw new HttpsError("already-exists", "Ye User ID already registered hai.");
    throw error;
  }
  return issueSession(id, publicUser(profile, id));
});

exports.expireResolvedReels = onSchedule("every 60 minutes", async () => {
  const snapshot = await db.collection("reels").get();
  const now = Date.now();

  for (const reelDoc of snapshot.docs) {
    const reel = reelDoc.data();
    if (reel.videoDeleted || !reel.problemId) continue;
    const problemSnap = await db.collection("problems").doc(reel.problemId).get();
    const problemData = problemSnap.exists ? problemSnap.data() : null;
    const isResolved = !!problemData && problemData.status === "Resolved";

    if (!isResolved) {
      if (reel.resolvedAt) await reelDoc.ref.update({ resolvedAt: null });
      continue;
    }
    if (!reel.resolvedAt) {
      await reelDoc.ref.update({ resolvedAt: problemData.resolvedAt || new Date(now).toISOString() });
      continue;
    }
    const resolvedAtMs = Date.parse(reel.resolvedAt);
    if (!Number.isFinite(resolvedAtMs) || now - resolvedAtMs < SEVEN_DAYS_MS) continue;
    if (reel.storagePath) await storage.bucket().file(reel.storagePath).delete({ ignoreNotFound: true });
    await reelDoc.ref.update({
      videoDeleted: true, videoUrl: "", videoDeletedAt: new Date(now).toISOString(), resolvedAt: reel.resolvedAt,
    });
  }
});
