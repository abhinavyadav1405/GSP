# GSP Authentication and Security Deployment

## What changed
- Username/password verification now runs in Firebase Cloud Functions instead of reading password hashes in the browser.
- New passwords are stored as salted PBKDF2-SHA256 credentials in the private `userCredentials` collection.
- Existing SHA-256 credentials are migrated to the private collection and upgraded to PBKDF2 after a successful login.
- Firestore and Storage rules use the server-issued `gspUserId` claim for owner checks and the Firebase `admin` custom claim for moderation.

## Required deployment order
1. Back up the Firestore database.
2. From the `functions` directory, install dependencies: `npm ci`.
3. Migrate existing credentials before deploying the restrictive rules: `node scripts/migrate-legacy-credentials.js`. Run with Application Default Credentials pointed at the correct Firebase project. Verify user profile documents no longer contain `passwordHash`.
4. Deploy the callable authentication functions: `firebase deploy --only functions:authenticateGspUser,functions:registerGspUser`.
5. Set the Admin custom claim from a trusted workstation: `node scripts/set-admin-claim.js <existing-user-id>`. The corresponding user must have signed in at least once so the Firebase Auth user exists.
6. Deploy rules: `firebase deploy --only firestore:rules,storage`.
7. Deploy the scheduled cleanup separately: `firebase deploy --only functions:expireResolvedReels`.

Do not deploy restrictive Firestore rules before migrating credentials and reviewing all collections used by the live app. The wildcard rule intentionally denies writes to collections not explicitly listed; verify the full app against staging first. The Admin UI still needs to be backed by a token claim before treating it as authorized; a localStorage admin flag is not a security boundary.

## Security notes
- Never commit service-account JSON or credentials to Git.
- Back up Firestore before running migration scripts.
- Firebase Functions deployment may require enabling billing/Blaze and Cloud Scheduler.
- App Check and callable-function abuse/rate controls should be enabled before public production rollout.
