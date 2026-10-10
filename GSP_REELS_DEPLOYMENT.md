# GSP Reels deployment notes

The frontend is integrated through `src/components/GSPReels.tsx`. Reels are stored in the Firestore `reels` collection and their original video files are uploaded to Firebase Storage.

## Scheduled deletion

The scheduled Firebase Function in `functions/index.js` checks linked problems hourly. When a linked problem is marked `Resolved`, it records the start of the seven-day period. If the problem is challenged and returned to a non-resolved status, the timer is cleared. After seven full days continuously resolved, the function permanently deletes the video object from Firebase Storage and retains the Reel/problem record with `videoDeleted: true`.

Deploy from the repository root after selecting the correct Firebase project:

```sh
cd functions && npm install
cd ..
firebase use <your-firebase-project-id>
firebase deploy --only functions:expireResolvedReels
```

Scheduled functions require Firebase billing/Cloud Scheduler support to be enabled. This repository change does not itself deploy the function to the Firebase project.

## Before public launch

The existing app uses its own user profile session in the UI while Firebase client authentication signs in anonymously. Do not treat client-side owner/admin checks as security boundaries. Configure and test Firebase Authentication plus restrictive Firestore/Storage rules before relying on owner-only deletion, moderation permissions, or private user data in production.
