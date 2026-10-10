# Server-side authentication migration runbook

Status: implementation design only. No authentication endpoint is enabled by this document, and the live Firestore rules must remain unchanged until the gates below are complete.

## Why the migration is required

The current client contains default admin password strings and checks admin credentials in the browser. It also reads password-related settings from Firestore. Anything shipped in the Vite bundle or readable by the Firebase client must be treated as public. Masking an input does not protect the stored value.

## Target architecture

1. Use Firebase Authentication for sign-in. Never compare admin passwords in React and never store a plaintext admin password in Firestore.
2. Provision each admin identity through a trusted, one-time operator process. Assign role custom claims (for example, `admin`, `userManager`, and `complaintManager`) only from a trusted server using Firebase Admin SDK. A browser must never set its own role.
3. Verify the Firebase ID token on the server. Exchange it for a short-lived Firebase session cookie using Firebase Admin SDK, with `HttpOnly`, `Secure`, and an appropriate `SameSite` policy. Add CSRF protection to state-changing cookie-authenticated endpoints.
4. Check the session and the specific role on every privileged API request. Return generic authentication errors and never log passwords, tokens, cookies, or private keys.
5. Keep public, user-owned, and admin-only data paths separate. A server API must not be a blind proxy that accepts arbitrary collection names or arbitrary document writes.
6. Move privileged writes (settings, moderation, role changes, blocked-user management) behind the authenticated server boundary, or use verified custom claims in Firestore rules once the client identity model has been migrated.
7. Replace the current custom username/password login only after a tested account migration or forced password-reset path is ready. Existing SHA-256 hashes cannot be converted into Firebase Authentication password credentials.

## Deployment secrets

Configure required secrets only in the Vercel project environment settings, not in source files, browser variables prefixed with `VITE_`, GitHub commits, or chat messages. Use a dedicated least-privilege service account for the server-side Firebase Admin SDK and rotate any credential that has previously been exposed.

Before implementation is enabled, confirm the production project ID and decide how existing users will verify ownership of their accounts. Do not ask users to paste private keys or service-account JSON into an issue or chat.

## Required rollout order

- [ ] Export and back up Firestore production data; inventory current user/admin role fields and complaint data.
- [ ] Create Firebase Authentication identities for admins and test accounts in a non-production project.
- [ ] Build and test server token verification, session creation, logout/revocation, CSRF protection, role checks, and generic error handling.
- [ ] Add tests for unauthenticated requests, expired/revoked sessions, wrong roles, forged client claims, CSRF failures, and allowed admin actions.
- [ ] Provide a verified migration/reset process for existing custom-ID accounts. Do not silently map a typed username to an account without proof of ownership.
- [ ] Separate public complaint/status fields from private complainant information before opening complaint reads to the public.
- [ ] Migrate the UI to the new sign-in/session flow and route privileged operations through the secured boundary.
- [ ] Run end-to-end checks in staging for registration, login, profile lookup, complaint creation, complaint moderation, settings, and each admin role.
- [ ] Deploy default-deny Firestore rules only after all app paths have migrated and Emulator tests pass.
- [ ] Revoke/rotate legacy admin passwords and credentials, then monitor auth failures and Firestore permission-denied events.

## Current safety boundary

`firestore.rules.candidate` is not production policy. The current app still relies on custom user IDs and client-side admin flows, so activating the candidate rules now can break live features. This runbook does not change the active rules, production data, Vercel environment, or account credentials.
