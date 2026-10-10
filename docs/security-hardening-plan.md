# GSP Security and Capacity Remediation

## Why this must be staged

The current client uses custom password checks in `src/App.tsx`, including SHA-256 hashing in the browser. The same file reads and writes admin passwords in the publicly readable `settings/main` document. Although the admin password fields are now masked in the settings UI, the underlying values remain accessible to the client. Firebase client code also automatically signs in anonymously. Therefore, simply changing Firestore rules to require `request.auth != null` would not secure the data: anonymous visitors satisfy that condition, while strict per-user rules would break the current user-ID-based login and registration flow.

Do not deploy restrictive rules until the identity model and the corresponding application reads/writes have been migrated and tested.

## Confirmed risks

- `firestore.rules` grants public reads broadly and allows unrestricted writes to `users`.
- `settings/main` is publicly readable while the client stores admin password fields there.
- The admin login check runs in the browser and includes default passwords in the client bundle.
- The app subscribes to whole `users` and `problems` collections; the read cost and client processing grow with collection size. The full `blockedUsers` listener is now restricted to admins with user-management permission.
- The repository has no build/test script beyond Vite dev/build/preview, and no Firebase Rules unit-test setup was found in the inspected package manifest.

## Safe remediation order

1. **Back up and inventory production data.** Export Firestore data and record existing collections/fields before any migration. Never test destructive operations against production.
2. **Move admin authorization server-side.** Add a server-side API or Cloud Function that verifies admin identity and role. Store secrets only in server environment variables; never in Vite `VITE_*` variables or Firestore public documents. Remove passwords from public settings and remove client-side password comparison. Require the project owner to configure the server secret before enabling the new login.
3. **Migrate user accounts.** Replace client-side SHA-256 password checking with a supported authentication system. Existing custom password hashes cannot be imported directly as Firebase Authentication passwords; provide a controlled password-reset or verified migration path before disabling the old flow.
4. **Split public profile data from private account data.** Public profile lookup must not expose password hashes, private contact details, or account metadata. The app should query only public profile fields.
5. **Replace Firestore rules.** Use default-deny rules with explicit collection-level permissions and server-side authorization for privileged mutations. Do not treat anonymous Firebase Auth as an admin or registered-user identity.
6. **Validate with Firebase Emulator Suite tests.** Cover anonymous visitors, registered users, each admin role, reads/writes to every collection, and invalid payloads. Keep production rules unchanged until these tests pass.
7. **Optimize reads.** Add filtered, paginated queries for growing collections; load admin-only data only in authorized admin views; use bounded result sets and indexes where appropriate.
8. **Load-test staging only.** Start at 10, 25, 50, and 100 virtual clients, ramp gradually, and monitor error rate, p95 latency, Firestore reads/writes, and Vercel function usage. Do not run a heavy test against the public production site.

## Candidate rules and automated tests

- `firestore.rules.candidate` is a proposed default-deny policy with public reads for currently public settings/complaints, authenticated complaint creation, admin-claim-only moderation/settings writes, UID-scoped user documents, and explicit denial for unlisted collections.
- `tests/firestore-rules.test.mjs` exercises public reads, anonymous denials, non-admin denials, admin-claim writes, and cross-user/private collection denials against the Firebase Emulator.
- `.github/workflows/firestore-rules.yml` installs the emulator test tools in CI and runs those tests against a demo project ID.
- **Do not rename this candidate to `firestore.rules` or deploy it yet.** The current app uses custom user IDs, reads some settings publicly, and performs client-side admin actions. Admin custom claims are not yet issued by a trusted server, and the app has not been migrated to UID-scoped profiles. Applying these rules now could break existing features.
- The candidate test suite and its workflow must pass in GitHub Actions before considering the next migration step. Passing these tests validates the candidate policy only, not the live production rules.

## Current validation

- GitHub Actions CI passed for commit `fdd093c37052de1a986a86531ca647d0fa66d178`, including dependency installation, Node-based regression checks, and the Vite production build: https://github.com/abhinavyadav1405/GSP/actions/runs/38034437086.
- A CodeQL workflow now runs JavaScript/TypeScript static security analysis on pushes and pull requests to `main` and `fix/security-migration-plan`, plus a weekly scheduled scan. Review its findings when the first run completes.
- The regression checks guard selected configuration/code invariants; neither those checks nor CodeQL substitute for Firebase Emulator rules tests or an end-to-end security review.
- No Firestore rules tests, account migration, server-side admin authorization rollout, or live production data migration have been performed. The current client-side admin credential exposure and permissive Firestore rules remain unresolved.

## Deployment gate

Do not merge/deploy the security migration until:
- server-side environment secrets are configured in the deployment platform;
- existing accounts have a tested migration/reset path;
- build and Firebase Emulator rules tests pass;
- login, registration, complaint submission, admin roles, profile lookup, and content editing are verified in staging;
- a rollback plan and Firestore backup are available.
