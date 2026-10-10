const { onSchedule } = require("firebase-functions/v2/scheduler");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getStorage } = require("firebase-admin/storage");

initializeApp();

const db = getFirestore();
const storage = getStorage();
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

// The schedule runs independently of visitors being on the website.
exports.expireResolvedReels = onSchedule("every 60 minutes", async () => {
  const snapshot = await db.collection("reels").get();
  const now = Date.now();

  for (const reelDoc of snapshot.docs) {
    const reel = reelDoc.data();
    if (reel.videoDeleted || !reel.problemId) continue;

    const problemSnap = await db.collection("problems").doc(reel.problemId).get();
    const isResolved = problemSnap.exists && problemSnap.data().status === "Resolved";

    if (!isResolved) {
      // A user challenge returns the linked problem to progress and resets the timer.
      if (reel.resolvedAt) {
        await reelDoc.ref.update({ resolvedAt: null });
      }
      continue;
    }

    if (!reel.resolvedAt) {
      await reelDoc.ref.update({ resolvedAt: new Date(now).toISOString() });
      continue;
    }

    const resolvedAtMs = Date.parse(reel.resolvedAt);
    if (!Number.isFinite(resolvedAtMs) || now - resolvedAtMs < SEVEN_DAYS_MS) continue;

    if (reel.storagePath) {
      await storage.bucket().file(reel.storagePath).delete({ ignoreNotFound: true });
    }

    // Keep the problem/reel record in My Posts, but remove the actual video.
    await reelDoc.ref.update({
      videoDeleted: true,
      videoUrl: "",
      videoDeletedAt: new Date(now).toISOString(),
      resolvedAt: reel.resolvedAt,
    });
  }
});
