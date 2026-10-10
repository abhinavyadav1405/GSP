// Run once before deploying the restrictive Firestore rules.
// Requires Application Default Credentials for the target Firebase project.
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
initializeApp();
const db = getFirestore();

async function main() {
  const users = await db.collection("users").get();
  let moved = 0;
  for (const userDoc of users.docs) {
    const data = userDoc.data();
    if (!data.passwordHash) continue;
    const credentialRef = db.collection("userCredentials").doc(userDoc.id);
    const existing = await credentialRef.get();
    if (!existing.exists) {
      await credentialRef.create({ algorithm: "legacy-sha256", passwordHash: data.passwordHash });
    }
    await userDoc.ref.update({ passwordHash: FieldValue.delete() });
    moved++;
  }
  console.log(`Moved ${moved} legacy credentials into private userCredentials documents.`);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
