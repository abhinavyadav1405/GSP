import React, { useEffect, useRef, useState } from "react";
import {
  addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc,
  ref, uploadBytes, getDownloadURL, deleteObject, db, storage,
} from "../firebase";

type ReelUser = { id: string; name: string; ward?: string; avatar?: string };
type RelatedProblem = { id: string; title: string; status: string; authorId?: string; name?: string };
type Reel = {
  id: string; ownerId: string; ownerName: string; ownerWard?: string; caption: string;
  problemId: string; problemTitle: string; storagePath: string; videoUrl: string;
  createdAt: string; moderationStatus?: string; reports?: Array<{ id: string; userId: string; userName: string; reason: string; details?: string; createdAt: string }>;
  challengedAt?: string; challengeReason?: string; videoDeleted?: boolean; resolvedAt?: string | null;
};
const REPORT_REASONS = ["गलत या झूठी जानकारी", "अश्लील या अनुचित वीडियो", "गाली-गलौज या उत्पीड़न", "स्पैम या बार-बार एक ही पोस्ट", "गाँव की समस्या से संबंधित नहीं", "अन्य"];
const MAX_BYTES = 50 * 1024 * 1024;
const MAX_SECONDS = 30;

export default function GSPReels({ user, isAdmin, problems, onLogin, showToast }: {
  user: ReelUser | null; isAdmin: boolean; problems: RelatedProblem[];
  onLogin: () => void; showToast: (message: string) => void;
}) {
  const [reels, setReels] = useState<Reel[]>([]);
  const [caption, setCaption] = useState("");
  const [problemId, setProblemId] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [recording, setRecording] = useState(false);
  const [reportingId, setReportingId] = useState("");
  const [reportReason, setReportReason] = useState(REPORT_REASONS[0]);
  const [reportDetails, setReportDetails] = useState("");
  const [challengeId, setChallengeId] = useState("");
  const [challengeReason, setChallengeReason] = useState("");
  const [showMine, setShowMine] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recordTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = query(collection(db, "reels"), orderBy("createdAt", "desc"));
    return onSnapshot(q, snap => setReels(snap.docs.map(d => ({ id: d.id, ...d.data() } as Reel))),
      err => { console.error("Reels listener failed", err); showToast("Reels लोड नहीं हो सके। Firebase rules जाँचें।"); });
  }, []);

  useEffect(() => () => {
    if (recordTimerRef.current) clearTimeout(recordTimerRef.current);
    streamRef.current?.getTracks().forEach(track => track.stop());
  }, []);

  const visibleReels = reels.filter(r => !r.videoDeleted && r.moderationStatus !== "removed" && (!showMine || (!!user && r.ownerId === user.id)));
  const ownProblems = problems.filter(p => user && (p.authorId === user.id || p.name === user.name));

  const getDuration = (file: File) => new Promise<number>((resolve, reject) => {
    const video = document.createElement("video");
    const url = URL.createObjectURL(file);
    video.preload = "metadata";
    video.onloadedmetadata = () => { const duration = video.duration; URL.revokeObjectURL(url); resolve(duration); };
    video.onerror = () => { URL.revokeObjectURL(url); reject(new Error("वीडियो पढ़ा नहीं जा सका।")); };
    video.src = url;
  });

  const chooseFile = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("video/")) { showToast("कृपया वीडियो फ़ाइल चुनें।"); return; }
    if (file.size > MAX_BYTES) { showToast("वीडियो 50 MB से छोटा होना चाहिए।"); return; }
    setVideoFile(file);
  };

  const startRecording = async () => {
    if (!user) { onLogin(); return; }
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      showToast("इस ब्राउज़र में वीडियो रिकॉर्डिंग उपलब्ध नहीं है। Gallery से वीडियो चुनें।"); return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: true });
      streamRef.current = stream;
      const mimeType = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm"].find(t => MediaRecorder.isTypeSupported(t));
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];
      recorder.ondataavailable = e => { if (e.data.size) chunksRef.current.push(e.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "video/webm" });
        const ext = blob.type.includes("mp4") ? "mp4" : "webm";
        const file = new File([blob], `gsp-reel-${Date.now()}.${ext}`, { type: blob.type });
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
        setVideoFile(file);
        setRecording(false);
        if (file.size > MAX_BYTES) { setVideoFile(null); showToast("रिकॉर्डिंग 50 MB से बड़ी है। छोटी रिकॉर्डिंग करें।"); }
      };
      recorder.start(250);
      setRecording(true);
      recordTimerRef.current = setTimeout(() => {
        if (recorder.state !== "inactive") recorder.stop();
        showToast("30 सेकंड पूरे हुए; रिकॉर्डिंग रोक दी गई।");
      }, MAX_SECONDS * 1000);
    } catch (error) {
      console.error(error);
      showToast("कैमरा/माइक्रोफ़ोन की अनुमति दें या Gallery से वीडियो चुनें।");
    }
  };

  const stopRecording = () => {
    if (recordTimerRef.current) clearTimeout(recordTimerRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") mediaRecorderRef.current.stop();
  };

  const publishReel = async () => {
    if (!user) { onLogin(); return; }
    if (!videoFile) { showToast("पहले वीडियो चुनें या रिकॉर्ड करें।"); return; }
    if (!problemId) { showToast("इस Reel से संबंधित अपनी समस्या चुनें।"); return; }
    if (videoFile.size > MAX_BYTES) { showToast("वीडियो 50 MB से छोटा होना चाहिए।"); return; }
    setUploading(true);
    try {
      const duration = await getDuration(videoFile);
      if (!Number.isFinite(duration) || duration <= 0 || duration > MAX_SECONDS + 0.25) {
        throw new Error("वीडियो की अवधि अधिकतम 30 सेकंड होनी चाहिए।");
      }
      const selectedProblem = ownProblems.find(p => p.id === problemId);
      if (!selectedProblem) throw new Error("केवल अपनी पोस्ट की गई समस्या के लिए Reel जोड़ सकते हैं।");
      const safeName = videoFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const storagePath = `reels/${user.id}/${Date.now()}-${safeName}`;
      const storageRef = ref(storage, storagePath);
      await uploadBytes(storageRef, videoFile, { contentType: videoFile.type, customMetadata: { ownerId: user.id, problemId } });
      const videoUrl = await getDownloadURL(storageRef);
      await addDoc(collection(db, "reels"), {
        ownerId: user.id, ownerName: user.name, ownerWard: user.ward || "",
        caption: caption.trim(), problemId, problemTitle: selectedProblem.title,
        storagePath, videoUrl, createdAt: new Date().toISOString(),
        moderationStatus: "visible", reports: [], videoDeleted: false, resolvedAt: null,
      });
      setCaption(""); setProblemId(""); setVideoFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      showToast("Reel सफलतापूर्वक पोस्ट हो गई।");
    } catch (error) {
      console.error(error);
      showToast(error instanceof Error ? error.message : "Reel पोस्ट नहीं हो सकी।");
    } finally { setUploading(false); }
  };

  const deleteOwnReel = async (reel: Reel) => {
    if (!user || reel.ownerId !== user.id) return;
    if (!window.confirm("क्या आप अपनी Reel स्थायी रूप से हटाना चाहते हैं?")) return;
    try {
      if (reel.storagePath) await deleteObject(ref(storage, reel.storagePath));
      await deleteDoc(doc(db, "reels", reel.id));
      showToast("आपकी Reel डिलीट कर दी गई।");
    } catch (error) { console.error(error); showToast("Reel डिलीट नहीं हुई। Firebase Storage rules जाँचें।"); }
  };

  const submitReport = async (reel: Reel) => {
    if (!user) { onLogin(); return; }
    try {
      const report = { id: `${user.id}-${Date.now()}`, userId: user.id, userName: user.name, reason: reportReason, details: reportDetails.trim(), createdAt: new Date().toISOString() };
      await updateDoc(doc(db, "reels", reel.id), { reports: [...(reel.reports || []), report], moderationStatus: "reported" });
      setReportingId(""); setReportDetails("");
      showToast("रिपोर्ट Admin को भेज दी गई।");
    } catch (error) { console.error(error); showToast("रिपोर्ट भेजी नहीं जा सकी।"); }
  };

  const moderate = async (reel: Reel, action: "keep" | "remove" | "warn") => {
    try {
      if (action === "keep") await updateDoc(doc(db, "reels", reel.id), { moderationStatus: "visible", reports: [] });
      if (action === "remove") await updateDoc(doc(db, "reels", reel.id), { moderationStatus: "removed", reports: [], removedAt: new Date().toISOString(), removedByAdmin: true });
      if (action === "warn") {
        await addDoc(collection(db, "userWarnings"), { userId: reel.ownerId, userName: reel.ownerName, contentType: "reel", contentId: reel.id, createdAt: new Date().toISOString(), reason: (reel.reports || []).map(r => r.reason).join(", ") || "Admin warning" });
        await updateDoc(doc(db, "reels", reel.id), { reports: [], moderationStatus: "visible", warningSentAt: new Date().toISOString() });
      }
      showToast(action === "keep" ? "Reel रहने दी गई।" : action === "remove" ? "Reel हटा दी गई।" : "यूज़र को चेतावनी दर्ज कर दी गई।");
    } catch (error) { console.error(error); showToast("Admin कार्रवाई पूरी नहीं हुई।"); }
  };

  const challengeResolution = async (reel: Reel) => {
    if (!user || reel.ownerId !== user.id || !challengeReason.trim()) return;
    try {
      await updateDoc(doc(db, "problems", reel.problemId), {
        status: "In Progress", resolutionChallenge: { userId: user.id, reason: challengeReason.trim(), createdAt: new Date().toISOString() },
        resolutionChallengeAt: new Date().toISOString(), resolvedAt: null,
      });
      await updateDoc(doc(db, "reels", reel.id), { challengedAt: new Date().toISOString(), challengeReason: challengeReason.trim(), resolvedAt: null });
      setChallengeId(""); setChallengeReason("");
      showToast("Resolution Challenge Admin को भेज दिया गया।");
    } catch (error) { console.error(error); showToast("Challenge भेजा नहीं जा सका।"); }
  };

  return <section style={{ maxWidth: 620, margin: "0 auto", padding: "24px 0 100px", color: "var(--text-main)" }}>
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 18 }}>
      <div><div style={{ color: "#b57bee", fontSize: 11, fontWeight: 800, letterSpacing: 2 }}>GSP COMMUNITY</div><h2 style={{ fontSize: 30, marginTop: 5 }}>Reels</h2><p style={{ color: "var(--ct4)", fontSize: 12, marginTop: 5 }}>गाँव की समस्याएँ · 30 सेकंड तक · 50 MB तक</p></div>
      <button className="btn-ghost" onClick={() => user ? setShowMine(v => !v) : onLogin()} style={{ borderRadius: 999, padding: "10px 13px", whiteSpace: "nowrap" }}>{showMine ? "सभी Reels" : "My Reels"}</button>
    </header>

    <div className="glass" style={{ borderRadius: 18, padding: 16, marginBottom: 18 }}>
      <h3 style={{ fontSize: 16, marginBottom: 12 }}>＋ अपनी समस्या की Reel पोस्ट करें</h3>
      {!user ? <button className="btn-white" onClick={onLogin} style={{ borderRadius: 12, padding: 12, width: "100%" }}>Login करके Reel पोस्ट करें</button> : <>
        <label style={{ display: "block", fontSize: 12, color: "var(--ct4)", marginBottom: 6 }}>संबंधित समस्या</label>
        <select value={problemId} onChange={e => setProblemId(e.target.value)} style={{ marginBottom: 12 }}>
          <option value="">अपनी पोस्ट की हुई समस्या चुनें</option>
          {ownProblems.map(p => <option key={p.id} value={p.id}>{p.title} · {p.status}</option>)}
        </select>
        {ownProblems.length === 0 && <p style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 12 }}>पहले Post Problem में समस्या पोस्ट करें, फिर उससे Reel जोड़ें।</p>}
        <textarea value={caption} onChange={e => setCaption(e.target.value)} placeholder="समस्या का संक्षिप्त विवरण (वैकल्पिक)" rows={2} style={{ marginBottom: 12 }} />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          <button className="btn-ghost" onClick={() => fileInputRef.current?.click()} style={{ borderRadius: 10, padding: "10px 12px" }}>Gallery से वीडियो चुनें</button>
          <button className="btn-ghost" onClick={recording ? stopRecording : startRecording} style={{ borderRadius: 10, padding: "10px 12px", borderColor: recording ? "#f87171" : undefined }}>{recording ? "रिकॉर्डिंग रोकें" : "कैमरे से रिकॉर्ड करें"}</button>
          <input ref={fileInputRef} type="file" accept="video/*" capture="environment" onChange={e => chooseFile(e.target.files?.[0])} style={{ display: "none" }} />
        </div>
        {recording && <p style={{ color: "#f87171", fontSize: 12, marginBottom: 10 }}>● रिकॉर्डिंग जारी है — 30 सेकंड पर अपने-आप रुकेगी।</p>}
        {videoFile && <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, marginBottom: 12, overflowWrap: "anywhere" }}>🎬 {videoFile.name} · {(videoFile.size / (1024 * 1024)).toFixed(1)} MB <button className="btn-ghost" onClick={() => setVideoFile(null)} style={{ borderRadius: 8, padding: "4px 8px" }}>हटाएँ</button></div>}
        <button className="btn-white" disabled={uploading || recording || !videoFile || !problemId} onClick={publishReel} style={{ width: "100%", borderRadius: 12, padding: 12 }}>{uploading ? "अपलोड हो रहा है…" : "Reel पोस्ट करें"}</button>
      </>}
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: 18, maxHeight: "calc(100vh - 230px)", overflowY: "auto", scrollSnapType: "y mandatory", overscrollBehaviorY: "contain" }}>
      {visibleReels.length === 0 ? <div className="glass" style={{ borderRadius: 18, padding: 32, textAlign: "center", color: "var(--ct4)" }}>{showMine ? "आपने अभी कोई Reel पोस्ट नहीं की है।" : "अभी कोई Reel उपलब्ध नहीं है। पहली Reel पोस्ट करें।"}</div> : visibleReels.map(reel => {
        const problem = problems.find(p => p.id === reel.problemId);
        const isOwner = !!user && user.id === reel.ownerId;
        return <article key={reel.id} className="glass" style={{ borderRadius: 18, overflow: "hidden", scrollSnapAlign: "start" }}>
          <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#7c5cfc,#38d9f5)", color: "#fff", fontWeight: 800 }}>{(reel.ownerName || "U").slice(0, 1).toUpperCase()}</div>
            <div style={{ flex: 1, minWidth: 0 }}><strong style={{ fontSize: 13 }}>{reel.ownerName}</strong><div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 2 }}>{reel.ownerWard || "GSP"} · {new Date(reel.createdAt).toLocaleDateString("hi-IN")}</div></div>
            {isOwner && <button className="btn-danger" onClick={() => void deleteOwnReel(reel)} style={{ borderRadius: 9, padding: "7px 10px", fontSize: 11 }}>डिलीट</button>}
          </div>
          <div style={{ background: "#050505", aspectRatio: "9/16", height: "min(68vh, 760px)", maxHeight: "68vh", position: "relative" }}>
            <video src={reel.videoUrl} controls playsInline preload="metadata" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </div>
          <div style={{ padding: 14 }}>
            {isOwner && reel.warningSentAt && <div style={{ padding: "9px 11px", borderRadius: 10, background: "rgba(244,201,93,.12)", color: "#f4c95d", fontSize: 12, marginBottom: 10 }}>Admin ने इस Reel पर चेतावनी जारी की है।</div>}
            <div style={{ fontSize: 12, color: "#b57bee", fontWeight: 800, marginBottom: 5 }}>समस्या: {reel.problemTitle}</div>
            <div style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 8 }}>स्थिति: {problem?.status || "अपडेट उपलब्ध नहीं"}</div>
            {reel.caption && <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>{reel.caption}</p>}
            {isOwner && problem?.status === "Resolved" && !reel.challengedAt && <button className="btn-ghost" onClick={() => setChallengeId(challengeId === reel.id ? "" : reel.id)} style={{ borderRadius: 10, padding: "9px 12px", width: "100%", marginBottom: 8 }}>Challenge Resolution</button>}
            {challengeId === reel.id && <div style={{ marginBottom: 10 }}><textarea value={challengeReason} onChange={e => setChallengeReason(e.target.value)} placeholder="काम पूरा न होने का कारण लिखें…" rows={2} style={{ marginBottom: 8 }} /><button className="btn-white" onClick={() => void challengeResolution(reel)} style={{ borderRadius: 9, padding: 9, width: "100%" }}>Challenge भेजें</button></div>}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {user && !isOwner && <button className="btn-ghost" onClick={() => { setReportingId(reportingId === reel.id ? "" : reel.id); setReportReason(REPORT_REASONS[0]); }} style={{ borderRadius: 9, padding: "8px 11px", fontSize: 11 }}>Report Reel</button>}
              {isOwner && reel.challengedAt && <span style={{ color: "#f4c95d", fontSize: 11, alignSelf: "center" }}>Challenge Admin को भेजा गया</span>}
              {isAdmin && (reel.reports || []).length > 0 && <span style={{ color: "#f87171", fontSize: 11, alignSelf: "center" }}>Reports: {reel.reports!.length}</span>}
            </div>
            {reportingId === reel.id && <div style={{ marginTop: 10, display: "grid", gap: 8 }}><select value={reportReason} onChange={e => setReportReason(e.target.value)}>{REPORT_REASONS.map(r => <option key={r}>{r}</option>)}</select><textarea value={reportDetails} onChange={e => setReportDetails(e.target.value)} placeholder="अतिरिक्त विवरण (वैकल्पिक)" rows={2} /><button className="btn-white" onClick={() => void submitReport(reel)} style={{ borderRadius: 9, padding: 9 }}>रिपोर्ट भेजें</button></div>}
            {isAdmin && (reel.reports || []).length > 0 && <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--glass-border)" }}><strong style={{ fontSize: 12 }}>Admin Moderation</strong>{reel.reports!.map(report => <p key={report.id} style={{ fontSize: 11, color: "var(--ct4)", marginTop: 5 }}>{report.reason}{report.details ? ` — ${report.details}` : ""}</p>)}<div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 9 }}><button className="btn-ghost" onClick={() => void moderate(reel, "keep")} style={{ borderRadius: 8, padding: "7px 9px", fontSize: 11 }}>Keep Reel</button><button className="btn-danger" onClick={() => void moderate(reel, "remove")} style={{ borderRadius: 8, padding: "7px 9px", fontSize: 11 }}>Remove Reel</button><button className="btn-ghost" onClick={() => void moderate(reel, "warn")} style={{ borderRadius: 8, padding: "7px 9px", fontSize: 11 }}>Warn User</button></div></div>}
          </div>
        </article>;
      })}
    </div>
  </section>;
}
