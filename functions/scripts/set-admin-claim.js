// Run only from a trusted administrator workstation with Firebase Admin credentials.
// Usage: node scripts/set-admin-claim.js <existing-user-id> [super|user-admin|complaint-admin]
const crypto = require("node:crypto");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
initializeApp();
const id = String(process.argv[2] || "").trim().toLowerCase();
const role = String(process.argv[3] || "super").trim();
if (!/^[a-z0-9._-]{3,40}$/.test(id) || !["super", "user-admin", "complaint-admin"].includes(role)) {
  console.error("Usage: node scripts/set-admin-claim.js <existing-user-id>");
  process.exit(1);
}
const uid = "gsp_" + crypto.createHash("sha256").update(id).digest("hex").slice(0, 40);
async function main() {
  const auth = getAuth();
  const user = await auth.getUser(uid);
  await auth.setCustomUserClaims(uid, { ...(user.customClaims || {}), gspUserId: id, admin: true, adminRole: role });
  console.log(`Admin claim enabled for ${id} with role ${role}. The user must sign out and sign in again.`);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
