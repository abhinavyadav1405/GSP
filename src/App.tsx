import { useState, useEffect, useRef } from "react";
import {
  auth, db, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signInWithRedirect, getRedirectResult,
  collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc, query, orderBy,
  storage, ref, uploadBytes, getDownloadURL,
} from "./firebase";
import type { User, ConfirmationResult } from "firebase/auth";


const GLOBAL_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  @keyframes blob1 { 0%,100% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(60px,-40px) scale(1.12); } 66% { transform: translate(-40px,30px) scale(0.94); } }
  @keyframes blob2 { 0%,100% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(-50px,55px) scale(1.08); } 66% { transform: translate(65px,-20px) scale(0.95); } }
  @keyframes blob3 { 0%,100% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(40px,50px) scale(1.06); } 66% { transform: translate(-55px,-35px) scale(1.04); } }
  .aurora-bg { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
  .ab { position: absolute; border-radius: 50%; filter: blur(75px); opacity: 0.40; mix-blend-mode: multiply; }
  .ab1 { width: 55vw; height: 55vw; max-width: 680px; background: radial-gradient(circle, rgba(255,50,50,0.7) 0%, transparent 100%); top: -15%; left: -10%; animation: blob1 8s ease-in-out infinite; }
  .ab2 { width: 50vw; height: 50vw; max-width: 580px; background: radial-gradient(circle, rgba(255,220,0,0.7) 0%, transparent 100%); top: 30%; right: -12%; animation: blob2 10s ease-in-out infinite; }
  .ab3 { width: 42vw; height: 42vw; max-width: 520px; background: radial-gradient(circle, rgba(50,205,50,0.65) 0%, transparent 100%); bottom: -10%; left: 30%; animation: blob3 12s ease-in-out infinite; }
  .ab4 { width: 32vw; height: 32vw; max-width: 400px; background: radial-gradient(circle, rgba(100,149,255,0.65) 0%, transparent 100%); top: 10%; right: 25%; animation: blob1 9s ease-in-out infinite reverse; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; background: #f0eeff; color: #1a1040; }
  :root {
    --bg-page:#0a0814;--bg2:#0f0c1e;--text-main:#f0eeff;
    --ct65:rgba(240,238,255,0.65);--ct6:rgba(240,238,255,0.60);--ct5:rgba(240,238,255,0.50);
    --ct45:rgba(240,238,255,0.45);--ct4:rgba(240,238,255,0.40);--ct35:rgba(240,238,255,0.35);--ct3:rgba(240,238,255,0.28);
    --cbg12:rgba(124,92,252,0.12);--cbg8:rgba(124,92,252,0.08);--cbg7:rgba(255,255,255,0.07);
    --cbg6:rgba(255,255,255,0.06);--cbg5:rgba(255,255,255,0.05);--cbg4:rgba(255,255,255,0.04);
    --cb25:rgba(124,92,252,0.40);--cb20:rgba(124,92,252,0.25);--cb15:rgba(124,92,252,0.18);--cb10:rgba(124,92,252,0.12);
    --glass-bg:rgba(255,255,255,0.045);--glass-border:rgba(255,255,255,0.10);
    --navbar-bg:rgba(10,8,20,0.78);--input-bg:rgba(255,255,255,0.055);
    --input-border:rgba(255,255,255,0.11);--input-color:#f0eeff;
    --input-placeholder:rgba(240,238,255,0.30);--select-option-bg:#13102a;
    --btn-ghost-bg:rgba(255,255,255,0.07);--btn-ghost-color:#f0eeff;
    --btn-ghost-border:rgba(255,255,255,0.13);--scrollbar:rgba(124,92,252,0.35);--grid-line:rgba(124,92,252,0.04);
  }
  [data-theme="light"] {
    --bg-page:#f0eeff;--bg2:#e4ddff;--text-main:#1a1040;
    --ct65:#2a2060;--ct6:#3a2f70;--ct5:#4a3f80;--ct45:#5a4f90;--ct4:#6a5fa0;--ct35:#7a6fb0;--ct3:#8a7fc0;
    --cbg12:rgba(124,92,252,0.12);--cbg8:rgba(124,92,252,0.08);--cbg7:rgba(124,92,252,0.07);
    --cbg6:rgba(124,92,252,0.06);--cbg5:rgba(124,92,252,0.05);--cbg4:rgba(124,92,252,0.04);
    --cb25:rgba(124,92,252,0.35);--cb20:rgba(124,92,252,0.22);--cb15:rgba(124,92,252,0.16);--cb10:rgba(124,92,252,0.10);
    --glass-bg:rgba(255,255,255,0.72);--glass-border:rgba(124,92,252,0.18);
    --navbar-bg:rgba(240,238,255,0.88);--input-bg:rgba(255,255,255,0.80);
    --input-border:rgba(124,92,252,0.22);--input-color:#1a1040;
    --input-placeholder:rgba(26,16,64,0.38);--select-option-bg:#fff;
    --btn-ghost-bg:rgba(124,92,252,0.08);--btn-ghost-color:#1a1040;
    --btn-ghost-border:rgba(124,92,252,0.22);--scrollbar:rgba(124,92,252,0.30);--grid-line:rgba(124,92,252,0.06);
  }
  .glass{background:var(--glass-bg);backdrop-filter:blur(20px) saturate(160%);-webkit-backdrop-filter:blur(20px) saturate(160%);border:1px solid var(--glass-border);position:relative;overflow:hidden;}
  .glass::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(145deg,rgba(124,92,252,0.20) 0%,rgba(255,255,255,0.04) 40%,rgba(56,217,245,0.08) 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;}
  [data-theme="light"] .glass::before{background:linear-gradient(145deg,rgba(124,92,252,0.12) 0%,rgba(255,255,255,0.5) 50%,rgba(56,217,245,0.08) 100%);}
  .glass-dark{background:var(--navbar-bg);backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);border:1px solid var(--glass-border);position:relative;overflow:hidden;}
  .btn-white{background:linear-gradient(135deg,#7c5cfc 0%,#5b3fd4 100%);color:#fff;border:none;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;transition:all 0.2s;box-shadow:0 4px 16px rgba(124,92,252,0.35);}
  .btn-white:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(124,92,252,0.5);}
  .btn-white:disabled{opacity:0.5;cursor:not-allowed;transform:none;box-shadow:none;}
  .btn-ghost{background:var(--btn-ghost-bg);color:var(--btn-ghost-color);border:1px solid var(--btn-ghost-border);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:500;transition:all 0.2s;}
  .btn-ghost:hover{background:rgba(124,92,252,0.12);border-color:rgba(124,92,252,0.28);}
  .btn-danger{background:rgba(248,113,113,0.10);color:#f87171;border:1px solid rgba(248,113,113,0.25);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:500;transition:all 0.2s;}
  [data-theme="light"] .btn-danger{color:#c00;} .btn-danger:hover{background:rgba(248,113,113,0.20);}
  input,textarea,select{background:var(--input-bg);border:1px solid var(--input-border);color:var(--input-color);font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;border-radius:12px;padding:10px 14px;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
  input:focus,textarea:focus,select:focus{border-color:rgba(124,92,252,0.50);box-shadow:0 0 0 3px rgba(124,92,252,0.12);}
  input::placeholder,textarea::placeholder{color:var(--input-placeholder);}
  select option{background:var(--select-option-bg);color:var(--input-color);}
  ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-track{background:transparent;} ::-webkit-scrollbar-thumb{background:var(--scrollbar);border-radius:4px;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
  @keyframes pulse-dot{0%,100%{opacity:1;}50%{opacity:0.3;}}
  @keyframes floatOrb{0%,100%{transform:translateY(0);}50%{transform:translateY(-22px);}}
  @keyframes floatChip{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}
  @keyframes pulseGlow{0%,100%{opacity:0.5;transform:scale(1);}50%{opacity:1;transform:scale(1.07);}}
  @keyframes shimmerTxt{0%{background-position:-200% 0;}100%{background-position:200% 0;}}
  @keyframes orbit1{from{transform:rotate(0deg) translateX(108px) rotate(0deg);}to{transform:rotate(360deg) translateX(108px) rotate(-360deg);}}
  @keyframes orbit2{from{transform:rotate(180deg) translateX(76px) rotate(-180deg);}to{transform:rotate(540deg) translateX(76px) rotate(-540deg);}}
  @keyframes rotBorder{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
  @keyframes splashShimmer{0%{background-position:-200% center}100%{background-position:200% center}}
  @keyframes splashExit{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.04)}}
  @keyframes particleDrift{0%,100%{transform:translateY(0) scale(1);opacity:0.5}50%{transform:translateY(-28px) scale(1.3);opacity:1}}
  @keyframes typingDot{0%,100%{opacity:0.3;transform:scale(0.8);}50%{opacity:1;transform:scale(1);}}
  .shimmer-text{background:linear-gradient(90deg,#f0eeff 0%,#b57bee 28%,#38d9f5 50%,#b57bee 72%,#f0eeff 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmerTxt 4s linear infinite;}
  .grid-bg{background-image:linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px);background-size:44px 44px;}
  @media(max-width:768px){.hero-split{flex-direction:column!important;}.hero-orb-col{display:none!important;}.hero-ctas{justify-content:center!important;}.hero-left{text-align:center;align-items:center!important;}.feat-grid{grid-template-columns:1fr 1fr!important;}}
`;

const uuid = () => Math.random().toString(36).slice(2, 10).toUpperCase();
const fmtDate = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

const STATUS_META: Record<string, { color: string; bg: string; label: string }> = {
  Pending:       { color: "#f4c95d", bg: "rgba(244,201,93,0.15)",  label: "⏳ Pending" },
  "In Progress": { color: "#7c5cfc", bg: "rgba(124,92,252,0.15)",  label: "🔄 In Progress" },
  Resolved:      { color: "#4ade80", bg: "rgba(74,222,128,0.15)",  label: "✅ Resolved" },
  Rejected:      { color: "#f87171", bg: "rgba(248,113,113,0.15)", label: "❌ Rejected" },
};
const PRIORITY_META: Record<string, { color: string; label: string }> = {
  Low:    { color: "#a89ec9", label: "Low" },
  Medium: { color: "#f4c95d", label: "Medium" },
  High:   { color: "#fb923c", label: "High" },
  Urgent: { color: "#f87171", label: "🚨 Urgent" },
};
const CATEGORIES = ["Water Supply","Road / Path","Electricity","Drainage","Sanitation","Education","Health","Street Light","Other"];
const WARDS = ["Chhatarsar", "Pahrajpur", "Chakjalal", "Chakmoti", "Chakjiya", "Other"];
const CAT_COLORS: Record<string, string> = {
  "Water Supply":"#38d9f5","Road / Path":"#b57bee","Electricity":"#f4c95d",
  "Drainage":"#7c5cfc","Sanitation":"#4ade80","Education":"#f87171",
  "Health":"#fb923c","Street Light":"#fbbf24","Other":"#6b7280",
};

interface LatLng { lat: number; lng: number; }
interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  village: string;
  date: string;
  photo?: string;
}
interface MediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  caption?: string;
  url: string;
  createdAt: string;
}
interface Notice {
  id: string;
  title: string;
  body: string;
  type: "urgent" | "meeting" | "scheme" | "event" | "general";
  date: string;
  createdAt: string;
}
interface Feedback {
  id: string;
  name: string;
  message: string;
  rating: number;
  createdAt: string;
}
interface Problem {
  id: string; name: string; mobile: string; ward: string;
  category: string; title: string; description: string;
  priority: string; status: string; submittedAt: string;
  adminNotes: string; photo?: string;
  locationText?: string;
  locationCoords?: LatLng;
}

const compressImage = (file: File, maxW = 400, quality = 0.3): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement("canvas");
        canvas.width  = img.width  * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = e.target!.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

// ── Helpers ───────────────────────────────────────────────────────────────────
function AnimatedHeading({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }, []);
  const lines = text.split("\n"); let charIdx = 0;
  return (
    <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.04em" }}>
      {lines.map((line, li) => (
        <div key={li} style={{ display: "block" }}>
          {line.split("").map((ch) => {
            const delay = 200 + charIdx++ * 28;
            return (
              <span key={delay} style={{ display: "inline-block", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)", transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`, whiteSpace: ch === " " ? "pre" : "normal" }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}

function FadeIn({ delay = 0, children, style = {} }: { delay?: number; children: React.ReactNode; style?: React.CSSProperties }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(12px)", transition: "opacity 700ms ease, transform 700ms ease", ...style }}>{children}</div>;
}

function Badge({ text, color, bg }: { text: string; color: string; bg?: string }) {
  return <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20, color, background: bg || color + "22", letterSpacing: "0.03em", display: "inline-block" }}>{text}</span>;
}

function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  useEffect(() => { const t = setTimeout(onClose, 4000); return () => clearTimeout(t); }, [onClose]);
  return <div className="glass" style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999, padding: "14px 20px", borderRadius: 14, maxWidth: 320, fontSize: 14, lineHeight: 1.5, animation: "fadeUp 0.3s ease" }}>{msg}</div>;
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="glass" style={{ borderRadius: 16, padding: "20px 24px", flex: 1, minWidth: 120 }}>
      <div style={{ fontSize: 32, fontWeight: 700, color, fontFamily: "'Space Grotesk',sans-serif" }}>{value}</div>
      <div style={{ fontSize: 13, color: "var(--ct5)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

// ── Section heading for settings ──────────────────────────────────────────────
function SectionHead({ icon, title }: { icon: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ fontSize: 20 }}>{icon}</span>
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 17 }}>{title}</h3>
    </div>
  );
}

// ── Photo Upload ──────────────────────────────────────────────────────────────
function PhotoUpload({ photo, onPhoto }: { photo: string | null; onPhoto: (b64: string | null) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [compressing, setCompressing] = useState(false);

  const process = async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setCompressing(true);
    try { onPhoto(await compressImage(file)); } catch (_) {}
    setCompressing(false);
  };
  const onDrop = (e: React.DragEvent) => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) process(f); };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {photo ? (
        <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
          <img src={photo} alt="Problem photo" style={{ width: "100%", maxHeight: 240, objectFit: "cover", display: "block" }} />
          <button onClick={() => onPhoto(null)} style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.7)", border: "none", color: "#fff", borderRadius: 8, padding: "4px 10px", fontSize: 12, cursor: "pointer" }}>✕ Remove</button>
        </div>
      ) : (
        <div onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={onDrop} onClick={() => inputRef.current?.click()}
          style={{ border: `2px dashed ${dragging ? "var(--ct4)" : "rgba(255,255,255,0.14)"}`, borderRadius: 12, padding: "28px 20px", textAlign: "center", cursor: "pointer", transition: "all 0.2s", background: dragging ? "var(--cbg4)" : "transparent" }}>
          {compressing ? <div style={{ fontSize: 13, color: "var(--ct4)" }}>Compressing…</div> : (
            <><div style={{ fontSize: 28, marginBottom: 8 }}>📷</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ct6)" }}>Click or drag a photo here</div><div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 8 }}><button type="button" onClick={() => { const el = document.createElement("input"); el.type = "file"; el.accept = "image/*"; el.capture = "environment"; el.onchange = (e) => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) process(f); }; el.click(); }} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "var(--ct4)", color: "var(--cbg)", fontSize: 12, cursor: "pointer" }}>📷 Camera</button><button type="button" onClick={() => inputRef.current?.click()} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "var(--ct4)", color: "var(--cbg)", fontSize: 12, cursor: "pointer" }}>🖼️ Gallery</button></div>
            <div style={{ fontSize: 11, color: "var(--ct3)", marginTop: 4 }}>JPG, PNG, WebP · auto-compressed</div></>
          )}
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) process(f); e.target.value = ""; }} />
    </div>
  );
}

// ── Problem Card ──────────────────────────────────────────────────────────────
function ProblemCard({ problem, isAdmin, onUpdate, onDelete }: {
  problem: Problem; isAdmin: boolean;
  onUpdate: (id: string, changes: Partial<Problem>) => void;
  onDelete?: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState(problem.status);
  const [notes, setNotes]   = useState(problem.adminNotes || "");
  const [confirmDel, setConfirmDel] = useState(false);
  const sm = STATUS_META[status];
  const pm = PRIORITY_META[problem.priority];

  const shareOnWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const s = STATUS_META[problem.status];
    const msg =
      `*ग्राम सभा पहराजपुर — समस्या रिपोर्ट*\n\n` +
      `📋 *ID:* #${problem.id}\n📌 *शीर्षक:* ${problem.title}\n🗂 *श्रेणी:* ${problem.category}\n` +
      `📍 *वार्ड:* ${problem.ward}\n⚡ *प्राथमिकता:* ${problem.priority}\n` +
      `${s.label.replace(/[⏳🔄✅❌]/g,"").trim()} *स्थिति:* ${problem.status}\n` +
      `👤 *नाम:* ${problem.name}\n📅 *तिथि:* ${fmtDate(problem.submittedAt)}\n\n` +
      `📝 *विवरण:* ${problem.description}` +
      (problem.locationText ? `\n\n📍 *स्थान:* ${problem.locationText}` : "") +
      (problem.locationCoords ? `\n🗺 *मैप:* https://maps.google.com/?q=${problem.locationCoords.lat},${problem.locationCoords.lng}` : "");
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="glass" style={{ borderRadius: 18, padding: "18px 20px", transition: "transform 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>

      <div style={{ cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--ct35)", marginBottom: 4, fontFamily: "monospace" }}>#{problem.id}</div>
            <div style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.3 }}>{problem.title}</div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {problem.photo && <span style={{ fontSize: 14 }} title="Has photo">📷</span>}
            <Badge text={sm.label} color={sm.color} bg={sm.bg} />
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap", alignItems: "center" }}>
          <Badge text={problem.category} color={CAT_COLORS[problem.category] || "#6b7280"} />
          <Badge text={problem.ward} color="var(--ct6)" bg="var(--cbg7)" />
          <Badge text={pm.label} color={pm.color} bg={pm.color + "22"} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 12, color: "var(--ct35)" }}>
          <a href={`tel:${problem.mobile}`} style={{color:"inherit",textDecoration:"none"}}>👤 {problem.name} · 📞 {problem.mobile}</a>
          <span>{fmtDate(problem.submittedAt)}</span>
        </div>
      </div>

      {expanded && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize: 13, color: "var(--ct65)", lineHeight: 1.7 }}>{problem.description}</div>

          {/* Location text */}
          {problem.locationText && (
            <div style={{ marginTop: 12, display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 14px", background: "rgba(59,130,246,0.06)", borderRadius: 10, border: "1px solid rgba(59,130,246,0.15)" }}>
              <span style={{ fontSize: 16 }}>📍</span>
              <div>
                <div style={{ fontSize: 11, color: "var(--ct4)", marginBottom: 2 }}>Location / Landmark</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{problem.locationText}</div>
              </div>
            </div>
          )}

          {/* Map pin */}
          {problem.locationCoords && (
            <a
              href={`https://www.openstreetmap.org/?mlat=${problem.locationCoords.lat}&mlon=${problem.locationCoords.lng}#map=17/${problem.locationCoords.lat}/${problem.locationCoords.lng}`}
              target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(34,197,94,0.06)", borderRadius: 10, border: "1px solid rgba(34,197,94,0.18)", textDecoration: "none" }}>
              <span style={{ fontSize: 16 }}>🗺</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "var(--ct4)", marginBottom: 2 }}>Map Location</div>
                <div style={{ fontSize: 12, color: "#22c55e" }}>{problem.locationCoords.lat.toFixed(5)}, {problem.locationCoords.lng.toFixed(5)}</div>
              </div>
              <span style={{ fontSize: 11, color: "var(--ct35)" }}>Open in Maps →</span>
            </a>
          )}

          {problem.photo && (
            <div style={{ marginTop: 14, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.10)" }}>
              <img src={problem.photo} alt="Problem photo" style={{ width: "100%", maxHeight: 320, objectFit: "cover", display: "block", cursor: "zoom-in" }}
                onClick={e => { e.stopPropagation(); window.open(problem.photo, "_blank"); }} />
              <div style={{ padding: "6px 12px", fontSize: 11, color: "var(--ct3)", background: "rgba(0,0,0,0.3)" }}>📷 Photo attached · click to open full size</div>
            </div>
          )}

          {problem.adminNotes && !isAdmin && (
            <div style={{ marginTop: 12, padding: "10px 14px", background: "rgba(59,130,246,0.08)", borderRadius: 10, fontSize: 13, color: "var(--ct6)", borderLeft: "2px solid #3b82f6" }}>
              <span style={{ color: "#3b82f6", fontWeight: 600 }}>Admin Note: </span>{problem.adminNotes}
            </div>
          )}

          {/* WhatsApp Share */}
          <button onClick={shareOnWhatsApp}
            style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8, width: "100%", justifyContent: "center", padding: "10px 0", borderRadius: 10, border: "none", background: "rgba(37,211,102,0.12)", color: "#25d366", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(37,211,102,0.22)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(37,211,102,0.12)")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Share on WhatsApp
          </button>

          {/* Admin Controls */}
          {isAdmin && (
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <select value={status} onChange={e => setStatus(e.target.value)}>
                  {Object.keys(STATUS_META).map(s => <option key={s}>{s}</option>)}
                </select>
                <button className="btn-white" style={{ borderRadius: 10, fontSize: 13 }} onClick={() => { onUpdate(problem.id, { status, adminNotes: notes }); }}>
                  💾 Save Changes
                </button>
              </div>
              <textarea rows={2} placeholder="Add admin note visible to public…" value={notes} onChange={e => setNotes(e.target.value)} />

              {/* Delete */}
              {!confirmDel ? (
                <button className="btn-danger" style={{ borderRadius: 10, padding: "8px 0", fontSize: 13 }} onClick={e => { e.stopPropagation(); setConfirmDel(true); }}>
                  🗑 Delete This Issue
                </button>
              ) : (
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-danger" style={{ borderRadius: 10, padding: "8px 0", fontSize: 13, flex: 1 }} onClick={e => { e.stopPropagation(); onDelete?.(problem.id); }}>
                    Confirm Delete
                  </button>
                  <button className="btn-ghost" style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }} onClick={e => { e.stopPropagation(); setConfirmDel(false); }}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Location Picker (no external library) ────────────────────────────────────
const DEFAULT_CENTER: LatLng = { lat: 26.42, lng: 82.68 };

function LocationPicker({ coords, onCoords }: { coords: LatLng | null; onCoords: (c: LatLng | null) => void }) {
  const [open, setOpen] = useState(false);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsErr, setGpsErr] = useState<string | null>(null);
  const [manualLat, setManualLat] = useState(coords ? String(coords.lat) : "");
  const [manualLng, setManualLng] = useState(coords ? String(coords.lng) : "");

  const useGPS = () => {
if (!navigator.geolocation) { setGpsErr("GPS not supported."); return; }
    setGpsLoading(true); setGpsErr(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const latlng: LatLng = { lat: parseFloat(pos.coords.latitude.toFixed(6)), lng: parseFloat(pos.coords.longitude.toFixed(6)) };
        onCoords(latlng);
        setManualLat(String(latlng.lat));
        setManualLng(String(latlng.lng));
        setGpsLoading(false);
      },
      () => { setGpsErr("GPS failed. Enter coordinates manually."); setGpsLoading(false); }
    );
  };

  const applyManual = () => {
    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);
    if (isNaN(lat) || isNaN(lng)) { setGpsErr("Invalid coordinates."); return; }
    onCoords({ lat, lng });
    setGpsErr(null);
  };

  const mapSrc = coords
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng-0.005},${coords.lat-0.005},${coords.lng+0.005},${coords.lat+0.005}&layer=mapnik&marker=${coords.lat},${coords.lng}`
    : `https://www.openstreetmap.org/export/embed.html?bbox=${DEFAULT_CENTER.lng-0.02},${DEFAULT_CENTER.lat-0.02},${DEFAULT_CENTER.lng+0.02},${DEFAULT_CENTER.lat+0.02}&layer=mapnik`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <button type="button" onClick={() => setOpen(!open)} className="btn-ghost"
        style={{ borderRadius: 12, padding: "10px 0", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        🗺 {coords ? `📍 Location Set (${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)})` : "Set Location (optional)"}
      </button>

      {open && (
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
          <div style={{ background: "rgba(0,0,0,0.5)", padding: "10px 14px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <button type="button" onClick={useGPS} className="btn-ghost" style={{ borderRadius: 8, padding: "6px 12px", fontSize: 12 }}>
              {gpsLoading ? "Locating…" : "📡 Use My GPS"}
            </button>
            <span style={{ fontSize: 11, color: "var(--ct4)" }}>or enter manually:</span>
            <input value={manualLat} onChange={e => setManualLat(e.target.value)} placeholder="Latitude" style={{ width: 100, fontSize: 12, padding: "5px 8px" }} />
            <input value={manualLng} onChange={e => setManualLng(e.target.value)} placeholder="Longitude" style={{ width: 100, fontSize: 12, padding: "5px 8px" }} />
            <button type="button" onClick={applyManual} className="btn-ghost" style={{ borderRadius: 8, padding: "6px 12px", fontSize: 12 }}>Set</button>
            {coords && <button type="button" onClick={() => { onCoords(null); setManualLat(""); setManualLng(""); }} style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", fontSize: 12 }}>✕ Clear</button>}
            <button type="button" onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "var(--ct4)", cursor: "pointer", marginLeft: "auto" }}>✕</button>
          </div>
          {gpsErr && <div style={{ background: "rgba(239,68,68,0.1)", padding: "8px 14px", fontSize: 12, color: "#f87171" }}>{gpsErr}</div>}
          <iframe src={mapSrc} title="Location Map" style={{ width: "100%", height: 260, border: "none", display: "block" }} loading="lazy" />
          <div style={{ padding: "6px 12px", background: "rgba(0,0,0,0.4)", fontSize: 11, color: "var(--ct3)" }}>
            Map preview · Use GPS or enter coordinates above
          </div>
        </div>
      )}
    </div>
  );
}

// ── Submit Form ───────────────────────────────────────────────────────────────
function SubmitForm({ onSubmit }: { onSubmit: (p: Problem) => Promise<void> }) {
  const [form, setForm] = useState({ name: "", mobile: "", ward: WARDS[0], category: CATEGORIES[0], title: "", description: "", priority: "Medium" });
  const [photo, setPhoto]               = useState<string | null>(null);
  const [locationText, setLocationText] = useState("");
  const [locationCoords, setLocationCoords] = useState<LatLng | null>(null);
  const [loading, setLoading] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handle = async () => {
    if (!form.name || !form.mobile || !form.title || !form.description) { alert("Please fill all required fields."); return; }
    setLoading(true);
    const problem: Problem = {
      ...form, id: uuid(), submittedAt: new Date().toISOString(), status: "Pending", adminNotes: "",
      photo: photo || undefined,
      locationText: locationText || undefined,
      locationCoords: locationCoords || undefined,
    };
    await onSubmit(problem);
    setForm({ name: "", mobile: "", ward: WARDS[0], category: CATEGORIES[0], title: "", description: "", priority: "Medium" });
    setPhoto(null);
    setLocationText("");
    setLocationCoords(null);
    setLoading(false);
  };

  const field = (label: string, children: React.ReactNode) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );

  return (
    <div className="glass" style={{ borderRadius: 22, padding: "28px 24px", maxWidth: 560, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22, marginBottom: 24 }}>Submit a Problem</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {field("Your Name *", <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="Full name" />)}
          {field("Mobile No. *", <input value={form.mobile} onChange={e => set("mobile", e.target.value)} placeholder="10-digit number" type="tel" />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {field("Ward / Area", <select value={form.ward} onChange={e => set("ward", e.target.value)}>{WARDS.map(w => <option key={w}>{w}</option>)}</select>)}
          {field("Category", <select value={form.category} onChange={e => set("category", e.target.value)}>{CATEGORIES.map(c => <option key={c}>{c}</option>)}</select>)}
        </div>
        {field("Problem Title *", <input value={form.title} onChange={e => set("title", e.target.value)} placeholder="Short, clear title (max 100 chars)" maxLength={100} />)}
        {field("Description *", <textarea rows={4} value={form.description} onChange={e => set("description", e.target.value)} placeholder="Describe the problem in detail..." maxLength={500} />)}
        {field("Photo (optional)", <PhotoUpload photo={photo} onPhoto={setPhoto} />)}
        {field("Location / Landmark (optional)", (
          <input
            value={locationText}
            onChange={e => setLocationText(e.target.value)}
            placeholder="e.g. Near Panchayat Bhawan, Ward 3 main road…"
            maxLength={200}
          />
        ))}
        {field("Pin on Map (optional)", <LocationPicker coords={locationCoords} onCoords={setLocationCoords} />)}
        {field("Priority", (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Low","Medium","High","Urgent"].map(p => (
              <label key={p} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, padding: "7px 14px", borderRadius: 10, border: `1px solid ${form.priority === p ? "var(--ct35)" : "var(--cb10)"}`, background: form.priority === p ? "var(--cbg8)" : "transparent", color: form.priority === p ? PRIORITY_META[p].color : "var(--ct5)", transition: "all 0.2s" }}>
                <input type="radio" value={p} checked={form.priority === p} onChange={() => set("priority", p)} style={{ width: "auto", display: "none" }} />
                {PRIORITY_META[p].label}
              </label>
            ))}
          </div>
        ))}
        <button className="btn-white" onClick={handle} disabled={loading} style={{ borderRadius: 12, padding: "13px 0", fontSize: 15, fontWeight: 600, marginTop: 4 }}>
          {loading ? "Submitting…" : "Submit Problem →"}
        </button>
      </div>
    </div>
  );
}

// ── Filter Bar ────────────────────────────────────────────────────────────────
function FilterBar({ filterCat, setFilterCat, filterStatus, setFilterStatus, filterWard, setFilterWard, search, setSearch, sort, setSort }: {
  filterCat: string; setFilterCat: (v: string) => void; filterStatus: string; setFilterStatus: (v: string) => void;
  filterWard: string; setFilterWard: (v: string) => void; search: string; setSearch: (v: string) => void; sort: string; setSort: (v: string) => void;
}) {
  return (
    <div className="glass" style={{ borderRadius: 16, padding: "16px 20px", marginBottom: 20 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title or ID…" style={{ flex: "1 1 180px", minWidth: 140 }} />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ flex: "1 1 120px", minWidth: 100 }}>
          <option value="All">All Status</option>
          {Object.keys(STATUS_META).map(s => <option key={s}>{s}</option>)}
        </select>
        <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ flex: "1 1 130px", minWidth: 110 }}>
          <option value="All">All Categories</option>
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <select value={filterWard} onChange={e => setFilterWard(e.target.value)} style={{ flex: "1 1 110px", minWidth: 90 }}>
          <option value="All">All Wards</option>
          {WARDS.map(w => <option key={w}>{w}</option>)}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)} style={{ flex: "1 1 120px", minWidth: 100 }}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="priority">By Priority</option>
        </select>
      </div>
    </div>
  );
}

// ── Admin Login ───────────────────────────────────────────────────────────────
function AdminLogin({ correctPassword, onLogin }: { correctPassword: string; onLogin: () => void }) {
  const ADMIN_ID = "abhinavyadav1405";
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const attempt = () => {
    if (id !== ADMIN_ID) { setErr("Galat Admin ID!"); return; }
    if (pw !== correctPassword) { setErr("Galat Password!"); return; }
    setErr(""); onLogin();
  };
  return (
    <div style={{ maxWidth: 380, margin: "60px auto" }}>
      <div className="glass" style={{ borderRadius: 22, padding: "32px 28px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔐</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22 }}>Admin Access</h2>
          <p style={{ fontSize: 13, color: "var(--ct4)", marginTop: 8 }}>ID aur Password daalo</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <input placeholder="Admin ID" value={id} onChange={e => { setId(e.target.value); setErr(""); }} />
          <input type="password" placeholder="Password" value={pw} onChange={e => { setPw(e.target.value); setErr(""); }} onKeyDown={e => e.key === "Enter" && attempt()} />
          {err && <div style={{ fontSize: 13, color: "#ef4444", textAlign: "center" }}>{err}</div>}
          <button className="btn-white" onClick={attempt} style={{ borderRadius: 12, padding: "12px 0", fontSize: 15, fontWeight: 600 }}>Login →</button>
        </div>
      </div>
    </div>
  );
}

// ── Category Grid ─────────────────────────────────────────────────────────────
function CategoryGrid({ problems, onNavigate }: { problems: Problem[]; onNavigate: () => void }) {
  const counts = CATEGORIES.reduce((acc, cat) => { acc[cat] = problems.filter(p => p.category === cat).length; return acc; }, {} as Record<string, number>);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 12 }}>
      {CATEGORIES.map(cat => (
        <div key={cat} className="glass" onClick={onNavigate} style={{ borderRadius: 14, padding: 16, cursor: "pointer", transition: "transform 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: CAT_COLORS[cat] || "#6b7280", marginBottom: 10 }} />
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{cat}</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: CAT_COLORS[cat] || "#6b7280", fontFamily: "'Space Grotesk',sans-serif" }}>{counts[cat]}</div>
          <div style={{ fontSize: 11, color: "var(--ct35)", marginTop: 2 }}>issues</div>
        </div>
      ))}
    </div>
  );
}

// ── Sarpanch Profile Card ─────────────────────────────────────────────────────
function SarpanchCard({ sarpanchName, photo, whatsapp, instagram, address }: { sarpanchName: string; photo: string; whatsapp: string; instagram: string; address: string }) {
  return (
    <div className="glass" style={{ borderRadius: 22, padding: "20px 22px", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", position: "relative" }}>
        {/* Photo / Avatar */}
        <div style={{ width: 84, height: 84, borderRadius: 20, flexShrink: 0, overflow: "hidden", boxShadow: "0 4px 20px rgba(22,163,74,0.35)", border: "2px solid rgba(34,197,94,0.3)", background: "linear-gradient(135deg,#16a34a,#166534)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {photo
            ? <img src={photo} alt="Sarpanch" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={{ fontSize: 40 }}></span>}
        </div>
        <div style={{ flex: 1, minWidth: 150 }}>
          <div style={{ fontSize: 10, color: "#22c55e", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 5 }}>GRAM PRADHAN · SARPANCH</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 4 }}>{sarpanchName}</div>
          <div style={{ fontSize: 12, color: "var(--ct4)", lineHeight: 1.5 }}>{address}</div>
        </div>
        {/* Contact Buttons */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {whatsapp && (
            <a href={`https://wa.me/91${whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noreferrer"
              style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderRadius:13,background:"rgba(37,211,102,0.1)",border:"1px solid rgba(37,211,102,0.3)",color:"#25d366",textDecoration:"none",fontWeight:600,fontSize:13 }}>
              💬 WhatsApp
            </a>
          )}
          {instagram && (
            <a href={`https://instagram.com/${instagram.replace("@","")}`} target="_blank" rel="noreferrer"
              style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderRadius:13,background:"rgba(225,48,108,0.1)",border:"1px solid rgba(225,48,108,0.3)",color:"#e1306c",textDecoration:"none",fontWeight:600,fontSize:13 }}>
              📸 Instagram
            </a>
          )}
          {!whatsapp && !instagram && (
            <div style={{ fontSize: 12, color: "var(--ct3)", fontStyle: "italic" }}>Add contact links in Settings</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Feedback Section ───────────────────────────────────────────────────────────
function FeedbackSection({ feedbacks, onAdd }: { feedbacks: Feedback[]; onAdd: (f: Feedback) => void }) {
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating]   = useState(5);
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!name.trim() || !message.trim()) return;
    onAdd({ id: uuid(), name: name.trim(), message: message.trim(), rating, createdAt: new Date().toISOString() });
    setName(""); setMessage(""); setRating(5); setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const recent    = [...feedbacks].sort((a,b) => new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()).slice(0,5);
  const avgRating = feedbacks.length ? (feedbacks.reduce((s,f)=>s+f.rating,0)/feedbacks.length).toFixed(1) : null;

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
        <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:600, fontSize:18, color:"var(--text-main)" }}>💬 Public Feedback</h3>
        {avgRating && <div style={{ fontSize:13, color:"#f59e0b", fontWeight:600 }}>⭐ {avgRating} avg · {feedbacks.length} review{feedbacks.length!==1?"s":""}</div>}
      </div>

      <div className="glass" style={{ borderRadius:18, padding:"20px 22px", marginBottom:14 }}>
        <div style={{ fontSize:13, color:"var(--ct45)", marginBottom:14 }}>Rate village works & share your suggestions</div>
        <div style={{ display:"flex", gap:4, marginBottom:14, alignItems:"center" }}>
          {[1,2,3,4,5].map(s => (
            <span key={s} onClick={()=>setRating(s)} onMouseEnter={()=>setHovered(s)} onMouseLeave={()=>setHovered(0)}
              style={{ fontSize:28, cursor:"pointer", filter:s<=(hovered||rating)?"none":"grayscale(1) opacity(0.25)", transition:"all 0.15s" }}>⭐</span>
          ))}
          <span style={{ fontSize:12, color:"rgba(255,255,255,0.38)", marginLeft:10 }}>{["","Poor","Fair","Good","Very Good","Excellent"][hovered||rating]}</span>
        </div>
        <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} maxLength={60} style={{ marginBottom:10 }} />
        <textarea rows={3} placeholder="Your feedback, suggestions or appreciation…" value={message} onChange={e=>setMessage(e.target.value)} maxLength={400} style={{ marginBottom:12 }} />
        {submitted
          ? <div style={{ padding:"11px",borderRadius:10,background:"rgba(34,197,94,0.12)",border:"1px solid rgba(34,197,94,0.25)",color:"#22c55e",fontSize:13,textAlign:"center",fontWeight:600 }}>✅ Thank you for your feedback!</div>
          : <button className="btn-white" onClick={submit} disabled={!name.trim()||!message.trim()} style={{ width:"100%",borderRadius:10,padding:"11px 0",fontSize:14,fontWeight:600 }}>Submit Feedback →</button>}
      </div>

      {recent.length > 0 && (
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {recent.map(f => (
            <div key={f.id} className="glass" style={{ borderRadius:14, padding:"14px 16px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ width:32, height:32, borderRadius:10, background:"var(--cbg7)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>👤</div>
                  <span style={{ fontSize:13, fontWeight:600 }}>{f.name}</span>
                </div>
                <div style={{ display:"flex", gap:1 }}>
                  {Array.from({length:5}).map((_,i)=><span key={i} style={{ fontSize:13,filter:i<f.rating?"none":"grayscale(1) opacity(0.2)" }}>⭐</span>)}
                </div>
              </div>
              <p style={{ fontSize:13, color:"var(--ct6)", lineHeight:1.65, margin:0 }}>{f.message}</p>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.22)", marginTop:6 }}>{fmtDate(f.createdAt)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Notices Page ──────────────────────────────────────────────────────────────
const NOTICE_META: Record<string, { color: string; bg: string; icon: string; label: string }> = {
  urgent:  { color: "#ef4444", bg: "rgba(239,68,68,0.12)",   icon: "🚨", label: "Urgent" },
  meeting: { color: "#3b82f6", bg: "rgba(59,130,246,0.12)",  icon: "📅", label: "Meeting" },
  scheme:  { color: "#22c55e", bg: "rgba(34,197,94,0.12)",   icon: "🏛", label: "Scheme" },
  event:   { color: "#f59e0b", bg: "rgba(245,158,11,0.12)",  icon: "🎉", label: "Event" },
  general: { color: "#a855f7", bg: "rgba(168,85,247,0.12)",  icon: "📢", label: "General" },
};

function NoticesPage({ notices, isAdmin, onDelete, compact = false, onViewAll }: {
  notices: Notice[]; isAdmin: boolean; onDelete: (id: string) => void;
  compact?: boolean; onViewAll?: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const sorted = [...notices].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const items = compact ? sorted.slice(0, 4) : sorted;

  return (
    <div>
      {compact ? (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, color: "var(--text-main)" }}>📢 Notices & Announcements</h3>
          {onViewAll && <button className="btn-ghost" onClick={onViewAll} style={{ borderRadius: 10, padding: "6px 14px", fontSize: 13 }}>View All</button>}
        </div>
      ) : (
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 20, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", fontSize: 12, color: "#f59e0b", marginBottom: 16, fontWeight: 600 }}>
            📢 Official Notices
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 28, marginBottom: 8 }}>Notices & Announcements</h2>
          <p style={{ fontSize: 13, color: "var(--ct4)" }}>Official announcements from Sarpanch Priyanka Yadav — Gram Sabha Pahrajpur</p>
        </div>
      )}

      {notices.length === 0 ? (
        <div className="glass" style={{ borderRadius: 20, padding: compact ? "28px 24px" : "48px 32px", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: compact ? 15 : 19, fontWeight: 600, marginBottom: 8 }}>No notices yet</div>
          <div style={{ color: "var(--ct4)", fontSize: 13 }}>{isAdmin ? "Go to Settings → Notices to post your first announcement." : "Official notices from the Sarpanch will appear here."}</div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map(n => {
            const m = NOTICE_META[n.type];
            const isExp = expanded === n.id;
            return (
              <div key={n.id} className="glass" style={{ borderRadius: 16, padding: "16px 18px", cursor: "pointer", borderLeft: `3px solid ${m.color}`, transition: "all 0.2s" }}
                onClick={() => setExpanded(isExp ? null : n.id)}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>{m.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 14 }}>{n.title}</span>
                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: m.bg, color: m.color, fontWeight: 600 }}>{m.icon} {m.label}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>📅 {n.date} · Posted {fmtDate(n.createdAt)}</div>
                  </div>
                  <span style={{ color: "var(--ct3)", fontSize: 12, flexShrink: 0, paddingTop: 2 }}>{isExp ? "▲" : "▼"}</span>
                </div>
                {isExp && (
                  <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ fontSize: 13, color: "var(--ct65)", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{n.body}</p>
                    {isAdmin && (
                      <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
                        <button className="btn-danger" style={{ borderRadius: 9, padding: "7px 16px", fontSize: 13 }}
                          onClick={e => { e.stopPropagation(); onDelete(n.id); }}>🗑 Delete</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {compact && notices.length > 4 && onViewAll && (
        <div style={{ textAlign: "center", marginTop: 14 }}>
          <button className="btn-ghost" onClick={onViewAll} style={{ borderRadius: 12, padding: "10px 28px", fontSize: 14 }}>View All {notices.length} Notices →</button>
        </div>
      )}
    </div>
  );
}

// ── Gallery Page ──────────────────────────────────────────────────────────────
function getYoutubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function GalleryPage({ media, isAdmin, onDelete, compact = false, onViewAll }: {
  media: MediaItem[]; isAdmin: boolean; onDelete: (id: string) => void;
  compact?: boolean; onViewAll?: () => void;
}) {
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const items = compact ? media.slice(0, 6) : media;

  return (
    <div>
      {/* Lightbox */}
      {lightbox && lightbox.type === "photo" && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(8px)" }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: "100%", position: "relative" }}>
            <img src={lightbox.url} alt={lightbox.title} style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: 16, display: "block" }} />
            {lightbox.caption && <p style={{ textAlign: "center", marginTop: 12, color: "rgba(255,255,255,0.55)", fontSize: 14 }}>{lightbox.caption}</p>}
            <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: -12, right: -12, width: 36, height: 36, borderRadius: "50%", background: "var(--cb10)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          </div>
        </div>
      )}

      {!compact && (
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 20, background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.25)", fontSize: 12, color: "#a855f7", marginBottom: 16, fontWeight: 600 }}>
            📷 Village Gallery
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 28, marginBottom: 8 }}>Photos & Videos</h2>
          <p style={{ fontSize: 13, color: "var(--ct4)" }}>Precious moments, places, and milestones of Gram Sabha Pahrajpur</p>
        </div>
      )}

      {compact && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, color: "var(--text-main)" }}>📷 Village Gallery</h3>
          {onViewAll && <button className="btn-ghost" onClick={onViewAll} style={{ borderRadius: 10, padding: "6px 14px", fontSize: 13 }}>View All</button>}
        </div>
      )}

      {media.length === 0 ? (
        <div className="glass" style={{ borderRadius: 20, padding: compact ? "32px 24px" : "48px 32px", textAlign: "center" }}>
          <div style={{ fontSize: 42, marginBottom: 12 }}>🖼</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: compact ? 16 : 20, fontWeight: 600, marginBottom: 8 }}>No photos or videos yet</div>
          <div style={{ color: "var(--ct4)", fontSize: 13 }}>{isAdmin ? "Go to Settings → Gallery to add your first photo or video." : "Village photos and videos will appear here soon."}</div>
        </div>
      ) : (
        <div style={{ columns: compact ? "2" : "3", columnGap: 12, columnFill: "balance" }}>
          {items.map(item => {
            const ytId = item.type === "video" ? getYoutubeId(item.url) : null;
            return (
              <div key={item.id} style={{ breakInside: "avoid", marginBottom: 12, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", position: "relative", cursor: item.type === "photo" ? "zoom-in" : "default" }}
                onClick={() => item.type === "photo" && setLightbox(item)}>
                {item.type === "photo" ? (
                  <img src={item.url} alt={item.title} style={{ width: "100%", display: "block", objectFit: "cover" }} />
                ) : ytId ? (
                  <div style={{ position: "relative", paddingBottom: "56.25%", background: "#000" }}>
                    <iframe src={`https://www.youtube.com/embed/${ytId}`} title={item.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} allowFullScreen />
                  </div>
                ) : (
                  <div style={{ padding: "16px", textAlign: "center", color: "var(--ct4)", fontSize: 13 }}>⚠️ Invalid video URL</div>
                )}

                {/* Overlay label */}
                <div style={{ padding: "10px 12px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-main)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</div>
                  {item.caption && <div style={{ fontSize: 11, color: "var(--ct45)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.caption}</div>}
                </div>

                {/* Type badge */}
                <div style={{ position: "absolute", top: 8, left: 8, fontSize: 11, padding: "3px 8px", borderRadius: 8, background: item.type === "photo" ? "rgba(168,85,247,0.8)" : "rgba(239,68,68,0.8)", color: "#fff", fontWeight: 600, backdropFilter: "blur(4px)" }}>
                  {item.type === "photo" ? "📷 Photo" : "🎬 Video"}
                </div>

                {isAdmin && (
                  <button className="btn-danger" style={{ position: "absolute", top: 8, right: 8, borderRadius: 8, padding: "4px 10px", fontSize: 11 }}
                    onClick={e => { e.stopPropagation(); onDelete(item.id); }}>🗑</button>
                )}
              </div>
            );
          })}
        </div>
      )}

      {compact && media.length > 6 && onViewAll && (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <button className="btn-ghost" onClick={onViewAll} style={{ borderRadius: 12, padding: "10px 28px", fontSize: 14 }}>View All {media.length} Items →</button>
        </div>
      )}
    </div>
  );
}

// ── Achievements Page (Public) ────────────────────────────────────────────────
const ACH_CATEGORIES = ["Road / Path","Water Supply","Electricity","Sanitation","Education","Health","Drainage","Infrastructure","Other"];
const ACH_CAT_ICONS: Record<string,string> = {
  "Road / Path":"🛣","Water Supply":"💧","Electricity":"⚡","Sanitation":"🧹",
  "Education":"📚","Health":"🏥","Drainage":"🌊","Infrastructure":"🏗","Other":"✅",
};
const ACH_CAT_COLORS: Record<string,string> = {
  "Road / Path":"#a855f7","Water Supply":"#3b82f6","Electricity":"#f59e0b","Sanitation":"#10b981",
  "Education":"#ec4899","Health":"#ef4444","Drainage":"#06b6d4","Infrastructure":"#f97316","Other":"#6b7280",
};

function AchievementsPage({ achievements, isAdmin, onDelete }: {
  achievements: Achievement[]; isAdmin: boolean; onDelete: (id: string) => void;
}) {
  const [filterCat, setFilterCat] = useState("All");
  const [filterVillage, setFilterVillage] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const filtered = achievements.filter(a =>
    (filterCat === "All" || a.category === filterCat) &&
    (filterVillage === "All" || a.village === filterVillage)
  );

  return (
    <div style={{ paddingTop: 32, maxWidth: 800, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 20, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", fontSize: 12, color: "#22c55e", marginBottom: 16, fontWeight: 600 }}>
            🏆 Development Works
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 28, marginBottom: 8 }}>Completed Achievements</h2>
          <p style={{ fontSize: 13, color: "var(--ct4)" }}>Works and developments completed under the leadership of Sarpanch Priyanka Yadav</p>
        </div>
      </FadeIn>

      {/* Stats strip */}
      <FadeIn delay={80}>
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          {[
            { label: "Total Works", value: achievements.length, color: "#22c55e" },
            { label: "Villages Covered", value: [...new Set(achievements.map(a => a.village))].length, color: "#3b82f6" },
            { label: "Categories", value: [...new Set(achievements.map(a => a.category))].length, color: "#f59e0b" },
          ].map(s => (
            <div key={s.label} className="glass" style={{ borderRadius: 14, padding: "14px 20px", flex: 1, minWidth: 120 }}>
              <div style={{ fontSize: 22, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Filters */}
      <FadeIn delay={120}>
        <div className="glass" style={{ borderRadius: 14, padding: "14px 16px", marginBottom: 20, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ width: "auto", fontSize: 13, padding: "7px 12px" }}>
            <option value="All">All Categories</option>
            {ACH_CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={filterVillage} onChange={e => setFilterVillage(e.target.value)} style={{ width: "auto", fontSize: 13, padding: "7px 12px" }}>
            <option value="All">All Villages</option>
            {["Chhatarsar","Pahrajpur","Chakjalal","Chakmoti","Chakjiya","Other"].map(w => <option key={w}>{w}</option>)}
          </select>
          <span style={{ fontSize: 12, color: "var(--ct35)", marginLeft: "auto" }}>{filtered.length} work{filtered.length !== 1 ? "s" : ""}</span>
        </div>
      </FadeIn>

      {achievements.length === 0 ? (
        <FadeIn delay={200}>
          <div className="glass" style={{ borderRadius: 20, padding: "48px 32px", textAlign: "center" }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>🏆</div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 600, marginBottom: 8 }}>No achievements yet</div>
            <div style={{ color: "var(--ct4)", fontSize: 13 }}>{isAdmin ? "Go to Settings → Achievements to add your first completed work." : "Completed works will be listed here soon."}</div>
          </div>
        </FadeIn>
      ) : filtered.length === 0 ? (
        <FadeIn delay={200}>
          <div className="glass" style={{ borderRadius: 20, padding: "40px 32px", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🔍</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>No matching works</div>
            <div style={{ color: "var(--ct4)", fontSize: 13, marginTop: 6 }}>Try adjusting the filters.</div>
          </div>
        </FadeIn>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map((a, i) => {
            const color = ACH_CAT_COLORS[a.category] ?? "#6b7280";
            const icon  = ACH_CAT_ICONS[a.category]  ?? "✅";
            const isExp = expanded === a.id;
            return (
              <FadeIn key={a.id} delay={i * 40}>
                <div className="glass" style={{ borderRadius: 18, padding: "18px 20px", cursor: "pointer", border: `1px solid ${isExp ? color + "55" : "var(--cbg8)"}`, transition: "all 0.25s" }}
                  onClick={() => setExpanded(isExp ? null : a.id)}>
                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: color + "22", border: `1px solid ${color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15 }}>{a.title}</span>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: color + "22", color, fontWeight: 600 }}>{a.category}</span>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: "rgba(34,197,94,0.12)", color: "#22c55e", fontWeight: 600 }}>✅ Done</span>
                      </div>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12, color: "var(--ct4)" }}>
                        <span>📍 {a.village}</span>
                        <span>📅 {a.date}</span>
                      </div>
                    </div>
                    <div style={{ color: "var(--ct3)", fontSize: 13, flexShrink: 0, paddingTop: 2 }}>{isExp ? "▲" : "▼"}</div>
                  </div>

                  {/* Expanded */}
                  {isExp && (
                    <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <p style={{ fontSize: 13, color: "var(--ct65)", lineHeight: 1.7, marginBottom: a.photo ? 14 : 0 }}>{a.description}</p>
                      {a.photo && (
                        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                          <img src={a.photo} alt={a.title} style={{ width: "100%", maxHeight: 300, objectFit: "cover", display: "block", cursor: "zoom-in" }}
                            onClick={e => { e.stopPropagation(); window.open(a.photo, "_blank"); }} />
                          <div style={{ padding: "6px 12px", fontSize: 11, color: "var(--ct3)", background: "rgba(0,0,0,0.3)" }}>📷 Click to open full size</div>
                        </div>
                      )}
                      {isAdmin && (
                        <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end" }}>
                          <button className="btn-danger" style={{ borderRadius: 9, padding: "7px 16px", fontSize: 13 }}
                            onClick={e => { e.stopPropagation(); onDelete(a.id); }}>🗑 Delete</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Admin Settings Panel ──────────────────────────────────────────────────────
function AdminSettings({ problems, achievements, media, notices, feedbacks, adminPassword, villageName, sarpanchName, sarpanchPhoto, sarpanchAddress, whatsapp, instagram, onSavePassword, onSaveInfo, onSaveSocial, onSaveSarpanchPhoto, onSaveSarpanchAddress, onClearResolved, onClearAll, onAddAchievement, onDeleteAchievement, onAddMedia, onDeleteMedia, onAddNotice, onDeleteNotice, onDeleteFeedback, showToast }: {
  problems: Problem[]; achievements: Achievement[]; media: MediaItem[]; notices: Notice[]; feedbacks: Feedback[]; adminPassword: string; villageName: string; sarpanchName: string; sarpanchPhoto: string; sarpanchAddress: string; whatsapp: string; instagram: string;
  onSavePassword: (p: string) => void; onSaveInfo: (v: string, s: string) => void; onSaveSocial: (w: string, i: string) => void; onSaveSarpanchPhoto: (p: string) => void; onSaveSarpanchAddress: (a: string) => void;
  onClearResolved: () => void; onClearAll: () => void;
  onAddAchievement: (a: Achievement) => void; onDeleteAchievement: (id: string) => void;
  onAddMedia: (m: MediaItem) => void; onDeleteMedia: (id: string) => void;
  onAddNotice: (n: Notice) => void; onDeleteNotice: (id: string) => void;
  onDeleteFeedback: (id: string) => void;
  showToast: (m: string) => void;
}) {
  const [newPw, setNewPw]       = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwErr, setPwErr]       = useState("");
  const [village, setVillage]   = useState(villageName);
  const [sarpanch, setSarpanch] = useState(sarpanchName);
  const [addr, setAddr]         = useState(sarpanchAddress);
  const [confirmClear, setConfirmClear] = useState<"resolved" | "all" | null>(null);
  const [wa, setWa]     = useState(whatsapp);
  const [ig, setIg]     = useState(instagram);
  const [photoPreview, setPhotoPreview] = useState(sarpanchPhoto);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { showToast("⚠️ Photo must be under 2 MB."); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const b64 = reader.result as string;
      setPhotoPreview(b64);
      onSaveSarpanchPhoto(b64);
      showToast("✅ Profile photo saved.");
    };
    reader.readAsDataURL(file);
  };

  const blankAch = () => ({ title: "", description: "", category: ACH_CATEGORIES[0], village: "Pahrajpur", date: new Date().toISOString().slice(0,10) });
  const [achForm, setAchForm] = useState(blankAch());
  const [achPhoto, setAchPhoto] = useState<string | undefined>(undefined);
  const [achPhotoLoading, setAchPhotoLoading] = useState(false);
  const setAF = (k: string, v: string) => setAchForm(f => ({ ...f, [k]: v }));

  const handleAchPhoto = async (file: File) => {
    setAchPhotoLoading(true);
    try { setAchPhoto(await compressImage(file)); } catch (_) {}
    setAchPhotoLoading(false);
  };

  // Notices state
  const NOTICE_TYPES = ["urgent","meeting","scheme","event","general"] as const;
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeBody, setNoticeBody]   = useState("");
  const [noticeType, setNoticeType]   = useState<Notice["type"]>("general");
  const [noticeDate, setNoticeDate]   = useState(new Date().toISOString().slice(0,10));

  const submitNotice = () => {
    if (!noticeTitle.trim()) { showToast("⚠️ Title is required."); return; }
    if (!noticeBody.trim())  { showToast("⚠️ Notice content is required."); return; }
    onAddNotice({ id: uuid(), title: noticeTitle.trim(), body: noticeBody.trim(), type: noticeType, date: noticeDate, createdAt: new Date().toISOString() });
    setNoticeTitle(""); setNoticeBody(""); setNoticeType("general"); setNoticeDate(new Date().toISOString().slice(0,10));
    showToast("✅ Notice posted!");
  };

  // Media state
  const [mediaType, setMediaType] = useState<"photo" | "video">("photo");
  const [mediaTitle, setMediaTitle] = useState("");
  const [mediaCaption, setMediaCaption] = useState("");
  const [mediaVideoUrl, setMediaVideoUrl] = useState("");
  const [mediaPhoto, setMediaPhoto] = useState<string | undefined>(undefined);
  const [mediaPhotoLoading, setMediaPhotoLoading] = useState(false);

  const handleMediaPhoto = async (file: File) => {
    setMediaPhotoLoading(true);
    try { setMediaPhoto(await compressImage(file)); } catch (_) {}
    setMediaPhotoLoading(false);
  };

  const submitMedia = () => {
    if (!mediaTitle.trim()) { showToast("⚠️ Title is required."); return; }
    if (mediaType === "photo" && !mediaPhoto) { showToast("⚠️ Please select a photo."); return; }
    if (mediaType === "video" && !mediaVideoUrl.trim()) { showToast("⚠️ Please enter a YouTube URL."); return; }
    if (mediaType === "video" && !getYoutubeId(mediaVideoUrl)) { showToast("⚠️ Invalid YouTube URL. Use a youtube.com or youtu.be link."); return; }
    onAddMedia({ id: uuid(), type: mediaType, title: mediaTitle.trim(), caption: mediaCaption.trim() || undefined, url: mediaType === "photo" ? mediaPhoto! : mediaVideoUrl.trim(), createdAt: new Date().toISOString() });
    setMediaTitle(""); setMediaCaption(""); setMediaVideoUrl(""); setMediaPhoto(undefined);
    showToast("✅ Added to gallery!");
  };

  const savePassword = () => {
    if (newPw.length < 4) { setPwErr("Password must be at least 4 characters."); return; }
    if (newPw !== confirmPw) { setPwErr("Passwords do not match."); return; }
    onSavePassword(newPw);
    setNewPw(""); setConfirmPw(""); setPwErr("");
    showToast("✅ Admin password updated successfully.");
  };

  const exportCSV = () => {
    const headers = ["ID","Title","Category","Ward","Priority","Status","Name","Mobile","Date","Description","Admin Notes"];
    const rows = problems.map(p => [
      p.id, `"${p.title}"`, p.category, p.ward, p.priority, p.status,
      p.name, p.mobile, fmtDate(p.submittedAt), `"${p.description}"`, `"${p.adminNotes}"`
    ]);
    const csv = [headers, ...rows].map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "gram-sabha-pahrajpur-issues.csv"; a.click();
    URL.revokeObjectURL(url);
    showToast("✅ CSV exported successfully.");
  };

  const card = (children: React.ReactNode) => (
    <div className="glass" style={{ borderRadius: 18, padding: "24px 22px", marginBottom: 16 }}>{children}</div>
  );

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", paddingTop: 32 }}>
      <FadeIn>
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 26, marginBottom: 6 }}>⚙️ Admin Settings</h2>
          <p style={{ fontSize: 13, color: "var(--ct4)" }}>Full control over the portal — only visible to you.</p>
        </div>
      </FadeIn>

      {/* ── Change Password ── */}
      <FadeIn delay={80}>
        {card(<>
          <SectionHead icon="🔑" title="Change Admin Password" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input type="password" placeholder="New password" value={newPw} onChange={e => { setNewPw(e.target.value); setPwErr(""); }} />
            <input type="password" placeholder="Confirm new password" value={confirmPw} onChange={e => { setConfirmPw(e.target.value); setPwErr(""); }} />
            {pwErr && <div style={{ fontSize: 13, color: "#ef4444" }}>{pwErr}</div>}
            <button className="btn-white" onClick={savePassword} style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }}>Update Password →</button>
          </div>
        </>)}
      </FadeIn>

      {/* ── Village Info ── */}
      <FadeIn delay={160}>
          {card(<>
          <SectionHead icon="🏘" title="Village & Sarpanch Info" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>Village Name (Hindi/English)</label>
              <input value={village} onChange={e => setVillage(e.target.value)} placeholder="ग्राम सभा पहराजपुर" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>Sarpanch Name</label>
              <input value={sarpanch} onChange={e => setSarpanch(e.target.value)} placeholder="Priyanka Yadav" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>Sarpanch Address</label>
              <input value={addr} onChange={e => setAddr(e.target.value)} placeholder="Gram Sabha Pahrajpur, Ballia, Uttar Pradesh" />
            </div>
            <button className="btn-white" onClick={() => { onSaveInfo(village, sarpanch); onSaveSarpanchAddress(addr); showToast("✅ Village info updated."); }} style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }}>
              Save Info →
            </button>
          </div>
        </>)}
      </FadeIn>

      {/* ── Sarpanch Photo + Social ── */}
      <FadeIn delay={200}>
        {card(<>
          <SectionHead icon="📱" title="Sarpanch Photo & Contact Links" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 16, lineHeight: 1.6 }}>
            These appear on the home page Sarpanch card. Photo max 2 MB.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Photo upload */}
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, overflow: "hidden", flexShrink: 0, border: "2px solid rgba(34,197,94,0.3)", background: "linear-gradient(135deg,#16a34a,#166534)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {photoPreview
                  ? <img src={photoPreview} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : <span style={{ fontSize: 32 }}>👩</span>}
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500, display: "block", marginBottom: 8 }}>Sarpanch Profile Photo</label>
                <label style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 10, background: "var(--cbg7)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "var(--text-main)" }}>
                  📷 Choose Photo
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: "none" }} />
                </label>
                {photoPreview && (
                  <button onClick={() => { setPhotoPreview(""); onSaveSarpanchPhoto(""); showToast("🗑 Photo removed."); }}
                    style={{ marginLeft: 10, fontSize: 12, color: "#f87171", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>
                    Remove
                  </button>
                )}
              </div>
            </div>

            <div style={{ height: 1, background: "var(--cbg6)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>WhatsApp Number (10 digits)</label>
              <input value={wa} onChange={e => setWa(e.target.value)} placeholder="9876543210" maxLength={15} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>Instagram Username (without @)</label>
              <input value={ig} onChange={e => setIg(e.target.value)} placeholder="priyanka_sarpanch" maxLength={40} />
            </div>
            <button className="btn-white" onClick={() => { onSaveSocial(wa, ig); showToast("✅ Contact links saved."); }} style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }}>
              Save Contact Links →
            </button>
          </div>
        </>)}
      </FadeIn>

      {/* ── Export ── */}
      <FadeIn delay={240}>
        {card(<>
          <SectionHead icon="📊" title="Export Data" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 14, lineHeight: 1.6 }}>
            Download all {problems.length} reported issues as a CSV file. Opens in Excel, Google Sheets, etc.
          </p>
          <button className="btn-ghost" onClick={exportCSV} style={{ borderRadius: 10, padding: "11px 0", width: "100%", fontSize: 14, fontWeight: 600 }}>
            ⬇️ Download CSV ({problems.length} issues)
          </button>
        </>)}
      </FadeIn>

      {/* ── Achievements Manager ── */}
      <FadeIn delay={300}>
        {card(<>
          <SectionHead icon="🏆" title="Achievements & Completed Works" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 18, lineHeight: 1.6 }}>
            Add completed development works and achievements visible to all villagers.
          </p>

          {/* Add form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "16px", background: "rgba(34,197,94,0.05)", borderRadius: 14, border: "1px solid rgba(34,197,94,0.15)", marginBottom: 18 }}>
            <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 600, marginBottom: 4 }}>+ Add New Achievement</div>
            <input placeholder="Work Title *" value={achForm.title} onChange={e => setAF("title", e.target.value)} maxLength={120} />
            <textarea rows={3} placeholder="Description — what was done, cost, benefit…" value={achForm.description} onChange={e => setAF("description", e.target.value)} maxLength={600} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              <select value={achForm.category} onChange={e => setAF("category", e.target.value)}>
                {ACH_CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={achForm.village} onChange={e => setAF("village", e.target.value)}>
                {["Chhatarsar","Pahrajpur","Chakjalal","Chakmoti","Chakjiya","Other"].map(w => <option key={w}>{w}</option>)}
              </select>
              <input type="date" value={achForm.date} onChange={e => setAF("date", e.target.value)} />
            </div>

            {/* Photo upload */}
            <label style={{ cursor: "pointer", border: "1px dashed rgba(34,197,94,0.3)", borderRadius: 10, padding: "10px 14px", textAlign: "center", fontSize: 13, color: "var(--ct4)", background: "rgba(34,197,94,0.03)" }}>
              {achPhotoLoading ? "⏳ Compressing…" : achPhoto ? "📷 Photo attached — click to change" : "📷 Add Photo (optional)"}
              <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => { if (e.target.files?.[0]) handleAchPhoto(e.target.files[0]); }} />
            </label>
            {achPhoto && (
              <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src={achPhoto} alt="preview" style={{ width: "100%", maxHeight: 160, objectFit: "cover", display: "block" }} />
                <button onClick={() => setAchPhoto(undefined)} style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.6)", border: "none", color: "#fff", borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontSize: 12 }}>✕ Remove</button>
              </div>
            )}

            <button className="btn-white" style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }}
              onClick={() => {
                if (!achForm.title.trim()) { showToast("⚠️ Title is required."); return; }
                if (!achForm.description.trim()) { showToast("⚠️ Description is required."); return; }
                onAddAchievement({ id: uuid(), ...achForm, photo: achPhoto });
                setAchForm(blankAch()); setAchPhoto(undefined);
                showToast("✅ Achievement added successfully!");
              }}>
              Add Achievement →
            </button>
          </div>

          {/* List */}
          {achievements.length === 0 ? (
            <div style={{ textAlign: "center", padding: "20px 0", color: "var(--ct3)", fontSize: 13 }}>No achievements added yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {achievements.map(a => (
                <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: 18 }}>{ACH_CAT_ICONS[a.category] ?? "✅"}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: "var(--ct35)" }}>{a.category} · {a.village} · {a.date}</div>
                  </div>
                  <button className="btn-danger" style={{ borderRadius: 8, padding: "5px 12px", fontSize: 12, flexShrink: 0 }} onClick={() => { onDeleteAchievement(a.id); showToast("🗑 Achievement deleted."); }}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </>)}
      </FadeIn>

      {/* ── Notices Manager ── */}
      <FadeIn delay={360}>
        {card(<>
          <SectionHead icon="📢" title="Notices & Announcements" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 18, lineHeight: 1.6 }}>
            Post official notices visible to all villagers on the home page.
          </p>

          {/* Add form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 16, background: "rgba(245,158,11,0.05)", borderRadius: 14, border: "1px solid rgba(245,158,11,0.2)", marginBottom: 18 }}>
            <div style={{ fontSize: 12, color: "#f59e0b", fontWeight: 600, marginBottom: 2 }}>+ Post New Notice</div>

            {/* Type selector */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {NOTICE_TYPES.map(t => {
                const m = NOTICE_META[t];
                return (
                  <button key={t} onClick={() => setNoticeType(t)} style={{ padding: "6px 12px", borderRadius: 9, border: `1px solid ${noticeType === t ? m.color + "88" : "var(--cb10)"}`, background: noticeType === t ? m.bg : "rgba(255,255,255,0.03)", color: noticeType === t ? m.color : "rgba(255,255,255,0.38)", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    {m.icon} {m.label}
                  </button>
                );
              })}
            </div>

            <input placeholder="Notice Title *" value={noticeTitle} onChange={e => setNoticeTitle(e.target.value)} maxLength={120} />
            <textarea rows={4} placeholder="Full notice / announcement text…" value={noticeBody} onChange={e => setNoticeBody(e.target.value)} maxLength={800} />
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 11, color: "var(--ct4)", marginBottom: 4, display: "block" }}>Notice Date</label>
                <input type="date" value={noticeDate} onChange={e => setNoticeDate(e.target.value)} />
              </div>
            </div>
            <button className="btn-white" style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }} onClick={submitNotice}>
              Post Notice →
            </button>
          </div>

          {/* List */}
          {notices.length === 0 ? (
            <div style={{ textAlign: "center", padding: "16px 0", color: "var(--ct3)", fontSize: 13 }}>No notices posted yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[...notices].sort((a,b) => new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()).map(n => {
                const m = NOTICE_META[n.type];
                return (
                  <div key={n.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${m.color}` }}>
                    <span style={{ fontSize: 18 }}>{m.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{n.title}</div>
                      <div style={{ fontSize: 11, color: "var(--ct35)" }}>{m.label} · {n.date}</div>
                    </div>
                    <button className="btn-danger" style={{ borderRadius: 8, padding: "5px 12px", fontSize: 12, flexShrink: 0 }} onClick={() => { onDeleteNotice(n.id); showToast("🗑 Notice deleted."); }}>Delete</button>
                  </div>
                );
              })}
            </div>
          )}
        </>)}
      </FadeIn>

      {/* ── Gallery Manager ── */}
      <FadeIn delay={380}>
        {card(<>
          <SectionHead icon="📷" title="Photos & Videos Gallery" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 18, lineHeight: 1.6 }}>
            Upload village photos or add YouTube videos. Visible to all on the home page.
          </p>

          {/* Type toggle */}
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            {(["photo","video"] as const).map(t => (
              <button key={t} onClick={() => setMediaType(t)} style={{ flex: 1, padding: "9px 0", borderRadius: 10, border: `1px solid ${mediaType === t ? "rgba(168,85,247,0.5)" : "var(--cb10)"}`, background: mediaType === t ? "rgba(168,85,247,0.15)" : "var(--cbg4)", color: mediaType === t ? "#c084fc" : "var(--ct4)", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                {t === "photo" ? "📷 Photo" : "🎬 YouTube Video"}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 16, background: "rgba(168,85,247,0.05)", borderRadius: 14, border: "1px solid rgba(168,85,247,0.15)", marginBottom: 18 }}>
            <input placeholder="Title *" value={mediaTitle} onChange={e => setMediaTitle(e.target.value)} maxLength={100} />
            <input placeholder="Caption (optional)" value={mediaCaption} onChange={e => setMediaCaption(e.target.value)} maxLength={200} />

            {mediaType === "photo" ? (<>
              <label style={{ cursor: "pointer", border: "1px dashed rgba(168,85,247,0.35)", borderRadius: 10, padding: "10px 14px", textAlign: "center", fontSize: 13, color: "var(--ct4)", background: "rgba(168,85,247,0.04)" }}>
                {mediaPhotoLoading ? "⏳ Compressing…" : mediaPhoto ? "📷 Photo selected — click to change" : "📷 Select Photo"}
                <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => { if (e.target.files?.[0]) handleMediaPhoto(e.target.files[0]); }} />
              </label>
              {mediaPhoto && (
                <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <img src={mediaPhoto} alt="preview" style={{ width: "100%", maxHeight: 180, objectFit: "cover", display: "block" }} />
                  <button onClick={() => setMediaPhoto(undefined)} style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.6)", border: "none", color: "#fff", borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontSize: 12 }}>✕</button>
                </div>
              )}
            </>) : (
              <input placeholder="YouTube URL (e.g. https://youtu.be/xxxxx)" value={mediaVideoUrl} onChange={e => setMediaVideoUrl(e.target.value)} />
            )}

            <button className="btn-white" style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }} onClick={submitMedia}>
              Add to Gallery →
            </button>
          </div>

          {/* Existing items list */}
          {media.length === 0 ? (
            <div style={{ textAlign: "center", padding: "16px 0", color: "var(--ct3)", fontSize: 13 }}>No gallery items yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {media.map(m => (
                <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {m.type === "photo"
                    ? <img src={m.url} alt={m.title} style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
                    : <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(239,68,68,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>🎬</div>}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.title}</div>
                    <div style={{ fontSize: 11, color: "var(--ct35)" }}>{m.type === "photo" ? "📷 Photo" : "🎬 Video"} · {fmtDate(m.createdAt)}</div>
                  </div>
                  <button className="btn-danger" style={{ borderRadius: 8, padding: "5px 12px", fontSize: 12, flexShrink: 0 }} onClick={() => { onDeleteMedia(m.id); showToast("🗑 Removed from gallery."); }}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </>)}
      </FadeIn>

      {/* ── Feedback Manager ── */}
      <FadeIn delay={440}>
        {card(<>
          <SectionHead icon="💬" title="Public Feedback" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 14, lineHeight: 1.6 }}>
            {feedbacks.length} feedback{feedbacks.length!==1?"s":""} received from villagers.
          </p>
          {feedbacks.length === 0 ? (
            <div style={{ textAlign: "center", padding: "14px 0", color: "var(--ct3)", fontSize: 13 }}>No feedback yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 320, overflowY: "auto" }}>
              {[...feedbacks].sort((a,b)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()).map(f => (
                <div key={f.id} style={{ display:"flex", alignItems:"center", gap:12, padding:"11px 14px", borderRadius:12, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:13, fontWeight:600, display:"flex", alignItems:"center", gap:8 }}>
                      {f.name}
                      <span style={{ fontSize:12 }}>{Array.from({length:f.rating}).map((_,i)=><span key={i}>⭐</span>)}</span>
                    </div>
                    <div style={{ fontSize:12, color:"var(--ct45)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.message}</div>
                    <div style={{ fontSize:11, color:"var(--cb25)", marginTop:2 }}>{fmtDate(f.createdAt)}</div>
                  </div>
                  <button className="btn-danger" style={{ borderRadius:8, padding:"5px 12px", fontSize:12, flexShrink:0 }} onClick={() => { onDeleteFeedback(f.id); showToast("🗑 Feedback removed."); }}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </>)}
      </FadeIn>

      {/* ── Danger Zone ── */}
      <FadeIn delay={500}>
        {card(<>
          <SectionHead icon="⚠️" title="Danger Zone" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderRadius: 12, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Delete Resolved Issues</div>
                <div style={{ fontSize: 12, color: "var(--ct4)", marginTop: 3 }}>{problems.filter(p => p.status === "Resolved").length} resolved issues will be removed</div>
              </div>
              {confirmClear === "resolved"
                ? <div style={{ display: "flex", gap: 8 }}>
                    <button className="btn-danger" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => { onClearResolved(); setConfirmClear(null); }}>Confirm</button>
                    <button className="btn-ghost" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => setConfirmClear(null)}>Cancel</button>
                  </div>
                : <button className="btn-danger" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => setConfirmClear("resolved")}>Delete</button>}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderRadius: 12, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Clear ALL Issues</div>
                <div style={{ fontSize: 12, color: "var(--ct4)", marginTop: 3 }}>Permanently delete all {problems.length} issues</div>
              </div>
              {confirmClear === "all"
                ? <div style={{ display: "flex", gap: 8 }}>
                    <button className="btn-danger" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => { onClearAll(); setConfirmClear(null); }}>Confirm</button>
                    <button className="btn-ghost" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => setConfirmClear(null)}>Cancel</button>
                  </div>
                : <button className="btn-danger" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => setConfirmClear("all")}>Clear All</button>}
            </div>
          </div>
        </>)}
      </FadeIn>
    </div>
  );
}

// ── Email Login Component ────────────────────────────────────────────────────
function PhoneLogin({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState<"login"|"register">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    if (!email || !password) { setError("Please fill all fields"); return; }
    setLoading(true); setError("");
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      if (!cred.user.emailVerified) {
        await signOut(auth);
        setError("Please verify your email first. Check your inbox.");
        return;
      }
      onClose();
    } catch {
      setError("Wrong email or password.");
    }
    setLoading(false);
  };

  const handleRegister = async () => {
    if (!email || !password || !name) { setError("Please fill all fields"); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters"); return; }
    setLoading(true); setError(""); setSuccess("");
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(result.user);
      await setDoc(doc(db, "users", result.user.uid), {
        name: name.trim(), email, createdAt: new Date().toISOString(),
      });
      await signOut(auth);
      setSuccess("Verification email sent! Check inbox & spam folder, then login.");
      setStep("login");
    } catch (e: any) {
      if (e.code === "auth/email-already-in-use") setError("Email already registered.");
      else setError("Registration failed. Try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ position:"fixed", inset:0, zIndex:9999, background:"rgba(0,0,0,0.75)", display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
      <div className="glass" style={{ borderRadius:22, padding:"32px 24px", width:"100%", maxWidth:380, textAlign:"center" }}>
        <div style={{ fontSize:40, marginBottom:12 }}>🔐</div>
        <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:600, fontSize:20, marginBottom:6, color:"var(--text-main)" }}>
          {step === "login" ? "Sign In" : "Create Account"}
        </h2>
        <p style={{ fontSize:13, color:"var(--ct4)", marginBottom:20 }}>
          {step === "login" ? "Sign in to submit problems" : "Register to get started"}
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:10, textAlign:"left" }}>
          {step === "register" && <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />}
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" type="email" />
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password (min 6 chars)" type="password" />
        </div>
        {error && <div style={{ fontSize:12, color:"#f87171", margin:"10px 0" }}>{error}</div>}
        {success && <div style={{ fontSize:13, color:"#000", margin:"10px 0", fontWeight:600, padding:"10px 12px", borderRadius:8, background:"#fff" }}>{success}</div>}
        <button className="btn-white" onClick={step === "login" ? handleLogin : handleRegister} disabled={loading}
          style={{ borderRadius:12, padding:"12px 0", width:"100%", fontSize:14, fontWeight:600, marginTop:14 }}>
          {loading ? "Please wait…" : step === "login" ? "Sign In →" : "Create Account →"}
        </button>
        <button onClick={() => { setStep(step === "login" ? "register" : "login"); setError(""); setSuccess(""); }}
          style={{ background:"none", border:"none", color:"var(--ct4)", fontSize:13, cursor:"pointer", marginTop:12 }}>
          {step === "login" ? "No account? Register here" : "Already registered? Sign in"}
        </button>
        <button onClick={onClose} style={{ background:"none", border:"none", color:"var(--ct4)", fontSize:12, cursor:"pointer", marginTop:8, display:"block", width:"100%" }}>
          Skip for now
        </button>
      </div>
    </div>
  );
}


// ── Photo Carousel ───────────────────────────────────────────────────────────
function PhotoCarousel({ media }: { media: any[] }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (media.length === 0) return;
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % media.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, [media.length]);

  if (!media || media.length === 0) return (
    <div style={{ marginTop: 32, marginBottom: 8 }}>
      <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, marginBottom: 16 }}>📷 Village Gallery</h2>
      <div style={{ borderRadius: 16, background: "var(--cbg5)", height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "var(--ct4)", fontSize: 13 }}>No photos uploaded yet</p>
      </div>
    </div>
  );

  const idx1 = current % media.length;
  const idx2 = (current + 1) % media.length;

  return (
    <div style={{ marginTop: 32, marginBottom: 8 }}>
      <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, marginBottom: 12 }}>📷 Village Gallery</h2>
      <div style={{ 
        display: "flex", gap: 10, perspective: "1000px",
        transform: animating ? "rotateY(90deg)" : "rotateY(0deg)",
        transition: "transform 0.4s ease",
      }}>
        {[idx1, idx2].map((idx, pos) => (
          <div key={idx} style={{
            flex: 1, borderRadius: 12, overflow: "hidden",
            aspectRatio: "3/2",
            maxHeight: 140,
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
            transform: animating 
              ? pos === 0 ? "rotateY(-90deg) scale(0.85)" : "rotateY(90deg) scale(0.85)"
              : "rotateY(0deg) scale(1)",
            transition: `transform 0.4s ease ${pos * 0.05}s`,
          }}>
            <img
              src={media[idx]?.url}
              alt={media[idx]?.caption || ""}
              style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "auto" }}
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
        {media.map((_, i) => (
          <div key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 20 : 7, height: 7,
            borderRadius: 4, background: i === current ? "var(--text-main)" : "var(--cb20)",
            cursor: "pointer", transition: "all 0.3s"
          }} />
        ))}
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────



  
// ── AI PANEL ─────────────────────────────────────────────────────────────────
function AIPanel({ villageName, sarpanchName }: { villageName: string; sarpanchName: string }) {
  const [query, setQuery] = useState("");
  const [msgs, setMsgs] = useState<{ role: string; text: string; id: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const QUICK = ["What is this portal?","How to report a problem?","Who is the Sarpanch?","What categories exist?"];

  const ask = async (text: string) => {
    if (!text.trim() || loading) return;
    const id = Date.now();
    setMsgs(prev => [...prev, { role:"user", text, id }]);
    setQuery(""); setLoading(true);
    try {
      const history = msgs.map(m => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }]
      }));
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAQ.Ab8RN6LNkN8-fBUo-b_C1gknqp9ccviflp_iEQ_I7FrdUZnN4A",
        { method:"POST", headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
            system_instruction: { parts: [{ text: `You are a helpful AI assistant for "${villageName}" — a Gram Panchayat Portal in India. Sarpanch: ${sarpanchName}. Villagers report infrastructure problems, track resolution, see notices, give feedback. Answer concisely in English under 3 sentences.` }] },
            contents: [...history, { role:"user", parts:[{ text }] }]
          })
        }
      );
      const data = await res.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Could not get a response.";
      setMsgs(prev => [...prev, { role:"ai", text:reply, id:id+1 }]);
    } catch { setMsgs(prev => [...prev, { role:"ai", text:"Connection error. Try again.", id:Date.now() }]); }
    setLoading(false);
    setTimeout(() => chatRef.current?.scrollTo({ top:99999, behavior:"smooth" }), 100);
  };

  return (
    <div style={{ width:"100%" }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width:"100%",display:"flex",alignItems:"center",gap:12,padding:"12px 18px",borderRadius:16,border:"1px solid rgba(124,92,252,0.35)",background:"rgba(124,92,252,0.08)",cursor:"pointer",color:"var(--text-main)",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,fontSize:14,backdropFilter:"blur(16px)",transition:"background 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.background="rgba(124,92,252,0.16)"}
        onMouseLeave={e => e.currentTarget.style.background="rgba(124,92,252,0.08)"}>
        <span style={{ width:30,height:30,borderRadius:9,background:"linear-gradient(135deg,#7c5cfc,#38d9f5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0,boxShadow:"0 4px 12px rgba(124,92,252,0.4)" }}>✨</span>
        <span style={{ flex:1,textAlign:"left" }}>Ask Paras AI about this portal</span>
        <span style={{ fontSize:18,color:"#b57bee",display:"inline-block",transform:open?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s" }}>⌄</span>
      </button>
      {open && (
        <div className="glass" style={{ marginTop:10,padding:0,overflow:"hidden",borderRadius:20 }}>
          <div style={{ padding:"12px 18px",borderBottom:"1px solid rgba(124,92,252,0.10)",display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ width:26,height:26,borderRadius:8,background:"linear-gradient(135deg,#7c5cfc,#38d9f5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13 }}>✨</div>
            <div><div style={{ fontSize:13,fontWeight:700,color:"var(--text-main)" }}>Paras AI</div><div style={{ fontSize:11,color:"var(--ct4)" }}>Ask anything about {villageName}</div></div>
            <div style={{ marginLeft:"auto",display:"flex",alignItems:"center",gap:5 }}><div style={{ width:7,height:7,borderRadius:"50%",background:"#4ade80",animation:"pulse-dot 2s infinite" }}/><span style={{ fontSize:11,color:"var(--ct4)" }}>Online</span></div>
          </div>
          <div ref={chatRef} style={{ height:220,overflowY:"auto",padding:"12px 14px 8px",display:"flex",flexDirection:"column",gap:10 }}>
            {msgs.length === 0 && (
              <div style={{ textAlign:"center",padding:"12px 0" }}>
                <div style={{ fontSize:24,marginBottom:8 }}>🌟</div>
                <div style={{ fontSize:13,color:"var(--ct4)",marginBottom:12 }}>Ask Paras anything about this portal</div>
                <div style={{ display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center" }}>
                  {QUICK.map(q => (<button key={q} onClick={() => ask(q)} style={{ padding:"5px 11px",borderRadius:20,border:"1px solid rgba(124,92,252,0.30)",background:"rgba(124,92,252,0.08)",color:"#b57bee",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",transition:"background 0.2s" }} onMouseEnter={e=>e.currentTarget.style.background="rgba(124,92,252,0.18)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(124,92,252,0.08)"}>{q}</button>))}
                </div>
              </div>
            )}
            {msgs.map(m => (
              <div key={m.id} style={{ display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start" }}>
                {m.role === "ai" && <div style={{ width:20,height:20,borderRadius:6,flexShrink:0,marginRight:6,marginTop:2,background:"linear-gradient(135deg,#7c5cfc,#38d9f5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10 }}>✨</div>}
                <div style={{ maxWidth:"80%",padding:"8px 12px",borderRadius:m.role==="user"?"12px 12px 4px 12px":"12px 12px 12px 4px",background:m.role==="user"?"linear-gradient(135deg,rgba(124,92,252,0.5),rgba(91,63,212,0.5))":"var(--glass-bg)",border:m.role==="user"?"none":"1px solid rgba(124,92,252,0.12)",fontSize:13,color:"var(--text-main)",lineHeight:1.6 }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display:"flex",alignItems:"center",gap:8,paddingLeft:28 }}>
                <div style={{ display:"flex",gap:4 }}>{[0,1,2].map(i => (<div key={i} style={{ width:6,height:6,borderRadius:"50%",background:"#b57bee",animation:`typingDot 1.2s ease-in-out ${i*0.2}s infinite` }}/>))}</div>
                <span style={{ fontSize:11,color:"var(--ct4)" }}>Thinking…</span>
              </div>
            )}
          </div>
          <div style={{ padding:"10px 12px",borderTop:"1px solid rgba(124,92,252,0.08)",display:"flex",gap:8,alignItems:"center" }}>
            <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key==="Enter" && ask(query)} placeholder="Ask Paras…" style={{ flex:1,padding:"8px 12px",borderRadius:11,fontSize:13 }}/>
            <button onClick={() => ask(query)} disabled={!query.trim() || loading} style={{ width:34,height:34,borderRadius:10,flexShrink:0,background:query.trim()&&!loading?"linear-gradient(135deg,#7c5cfc,#38d9f5)":"var(--cbg7)",border:"none",cursor:query.trim()&&!loading?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#fff",transition:"background 0.2s" }}>→</button>
          </div>
        </div>
      )}
    </div>
  );
}

const saveSettings = async (data) => {
    try {
      await setDoc(doc(db, "settings", "main"), data, { merge: true });
    } catch(e) { console.log(e); }
  };


// ── Welcome Splash ──────────────────────────────────────────────────────────
const SPLASH_STYLE = `
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes glowPulse { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:0.9;transform:scale(1.08)} }
  @keyframes particleDrift { 0%,100%{transform:translateY(0) scale(1);opacity:0.5} 50%{transform:translateY(-28px) scale(1.3);opacity:1} }
  @keyframes borderRotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes splashExit { from{opacity:1;transform:scale(1)} to{opacity:0;transform:scale(1.04)} }
  .splash-shimmer { background:linear-gradient(90deg,#fff 0%,#a3f0c0 20%,#fff 40%,#d4af37 60%,#fff 80%,#a3f0c0 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite; }
  .splash-exit { animation:splashExit 0.7s ease forwards; }
`;

function WelcomeSplash({ onDone }: { onDone: () => void }) {
  const isReturning = !!localStorage.getItem("gsp-visited");
  const [phase, setPhase] = useState(0);
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 2600),
      setTimeout(() => setPhase(5), 3400),
      setTimeout(() => setExiting(true), 4800),
      setTimeout(() => onDone(), 5500),
    ];
    return () => t.forEach(clearTimeout);
  }, [onDone]);
  const vis = (p: number): React.CSSProperties => ({
    opacity: phase >= p ? 1 : 0,
    transform: phase >= p ? "translateY(0)" : "translateY(22px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  });
  const particles = [
    {top:"10%",left:"7%",size:5,delay:"0s",dur:"4.2s"},
    {top:"18%",left:"90%",size:4,delay:"0.5s",dur:"5s"},
    {top:"68%",left:"4%",size:6,delay:"1s",dur:"4.6s"},
    {top:"80%",left:"93%",size:3,delay:"0.3s",dur:"6s"},
    {top:"45%",left:"2%",size:4,delay:"0.8s",dur:"5.4s"},
    {top:"55%",left:"96%",size:5,delay:"1.3s",dur:"4s"},
  ];
  return (
    <div className={exiting ? "splash-exit" : ""} style={{position:"fixed",inset:0,zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center",background:"#000",overflow:"hidden"}}>
      <style>{SPLASH_STYLE}</style>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% 50%, #0a1a0d 0%, #000 70%)",pointerEvents:"none"}} />
      <div style={{position:"absolute",width:"min(500px,90vw)",height:"min(500px,90vw)",borderRadius:"50%",border:"1px solid transparent",background:"linear-gradient(#000,#000) padding-box, conic-gradient(from 0deg, transparent 0%, rgba(34,197,94,0.55) 25%, transparent 50%, rgba(212,175,55,0.45) 75%, transparent 100%) border-box",animation:"borderRotate 8s linear infinite",pointerEvents:"none"}} />
      <div style={{position:"absolute",width:"min(360px,70vw)",height:"min(360px,70vw)",borderRadius:"50%",background:"radial-gradient(circle, rgba(22,163,74,0.16) 0%, transparent 70%)",animation:"glowPulse 3s ease-in-out infinite",pointerEvents:"none"}} />
      {particles.map((p,i) => (
        <div key={i} style={{position:"absolute",top:p.top,left:p.left,width:p.size,height:p.size,borderRadius:"50%",background:"rgba(34,197,94,0.75)",boxShadow:`0 0 ${p.size*3}px rgba(34,197,94,0.6)`,animation:`particleDrift ${p.dur} ${p.delay} ease-in-out infinite`,pointerEvents:"none"}} />
      ))}
      <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:600,width:"100%"}}>
        <div style={{...vis(1),marginBottom:26,display:"flex",justifyContent:"center"}}>
          <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:72,height:72,borderRadius:20,background:"linear-gradient(135deg,#16a34a 0%,#166534 100%)",boxShadow:"0 0 0 1px rgba(255,255,255,0.15),0 0 40px rgba(22,163,74,0.55)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(160deg,rgba(255,255,255,0.25) 0%,transparent 60%)"}} />
            <span style={{fontFamily:"Sora,sans-serif",fontWeight:800,fontSize:22,color:"#fff",letterSpacing:"0.06em",position:"relative",zIndex:1}}>GSP</span>
          </div>
        </div>
        <div style={{...vis(2),marginBottom:10}}>
          <div style={{fontFamily:"DM Sans,sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.38em",color:"rgba(212,175,55,0.88)",textTransform:"uppercase"}}>
            {isReturning ? "✦  Welcome Back to the  ✦" : "✦  Welcome to the  ✦"}
          </div>
        </div>
        <div style={{...vis(2),marginBottom:4}}>
          <div className="splash-shimmer" style={{fontFamily:"Sora,sans-serif",fontWeight:800,fontSize:"clamp(32px,7vw,64px)",lineHeight:1.05,letterSpacing:"-0.03em"}}>Digital Portal</div>
        </div>
        <div style={{...vis(3),marginBottom:4}}>
          <div style={{fontFamily:"DM Sans,sans-serif",fontSize:12,color:"rgba(255,255,255,0.4)",letterSpacing:"0.2em",textTransform:"uppercase"}}>of</div>
        </div>
        <div style={{...vis(3),marginBottom:2}}>
          <div style={{fontFamily:"Sora,sans-serif",fontWeight:700,fontSize:"clamp(18px,4.5vw,36px)",color:"#fff"}}>Gram Sabha</div>
        </div>
        <div style={{...vis(3),marginBottom:20}}>
          <div style={{fontFamily:"Sora,sans-serif",fontWeight:300,fontSize:"clamp(22px,5.5vw,46px)",color:"rgba(255,255,255,0.88)",letterSpacing:"0.05em",textTransform:"uppercase"}}>Pahrajpur</div>
        </div>
        <div style={{...vis(3),display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:20}}>
          <div style={{height:1,width:70,background:"linear-gradient(90deg,transparent,rgba(212,175,55,0.7),transparent)"}} />
          <div style={{width:5,height:5,borderRadius:"50%",background:"rgba(212,175,55,0.85)",boxShadow:"0 0 10px rgba(212,175,55,0.6)",flexShrink:0}} />
          <div style={{height:1,width:70,background:"linear-gradient(90deg,transparent,rgba(212,175,55,0.7),transparent)"}} />
        </div>
        <div style={{...vis(4),marginBottom:28}}>
          <p style={{fontFamily:"DM Sans,sans-serif",fontSize:"clamp(11px,2.5vw,14px)",color:"rgba(255,255,255,0.36)",letterSpacing:"0.14em",textTransform:"uppercase",lineHeight:1.9}}>ग्राम सेवा · पारदर्शिता · विकास</p>
        </div>
        <div style={{...vis(5)}}>
          <button onClick={() => { setExiting(true); setTimeout(onDone, 700); }} style={{fontFamily:"Sora,sans-serif",fontWeight:600,fontSize:13,padding:"12px 34px",borderRadius:50,background:"rgba(22,163,74,0.12)",border:"1px solid rgba(34,197,94,0.4)",color:"#4ade80",cursor:"pointer",letterSpacing:"0.1em",textTransform:"uppercase",transition:"all 0.25s ease",backdropFilter:"blur(8px)"}}>
            Enter Portal →
          </button>
          <p style={{marginTop:14,fontFamily:"DM Sans,sans-serif",fontSize:11,color:"rgba(255,255,255,0.25)"}}>Auto-entering in a moment…</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(!localStorage.getItem("gsp-visited"));
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [showLogin, setShowLogin] = useState(false);
  const [problems, setProblems]     = useState<Problem[]>([]);
  const [page, setPage]             = useState<"home"|"board"|"submit"|"admin"|"settings"|"achievements"|"gallery"|"notices">("home");
  const [isAdmin, setIsAdmin]       = useState(false);
  const [toast, setToast]           = useState<string | null>(null);
  const [filterCat, setFilterCat]   = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterWard, setFilterWard] = useState("All");
  const [search, setSearch]         = useState("");
  const [sort, setSort]             = useState("newest");
  const [loading, setLoading]       = useState(true);

  // Dynamic admin-configurable settings
  const [adminPassword, setAdminPassword] = useState("admin123");
  const [villageName, setVillageName]     = useState("Gram Sabha Pahrajpur");
  const [sarpanchName, setSarpanchName]   = useState("Priyanka Yadav");
  const [achievements, setAchievements]   = useState<Achievement[]>([]);
  const [media, setMedia]                 = useState<MediaItem[]>([]);
  const [notices, setNotices]             = useState<Notice[]>([]);
  const [feedbacks, setFeedbacks]         = useState<Feedback[]>([]);
  const [whatsapp, setWhatsapp]           = useState("");
  const [instagram, setInstagram]         = useState("");
  const [sarpanchPhoto, setSarpanchPhoto] = useState("");
  const [sarpanchAddress, setSarpanchAddress] = useState("Gram Sabha Pahrajpur, Ballia, Uttar Pradesh");
  const [theme, setTheme]                 = useState<"dark"|"light">("light");

  
  // Load sarpanch settings from Firestore in realtime
    const sq = doc(db, "settings", "sarpanch");
    const unsubSarpanch = onSnapshot(sq, (snap) => {
      if (snap.exists()) {
        const d = snap.data();
        if (d.sarpanchName) setSarpanchName(d.sarpanchName);
        if (d.sarpanchAddress) setSarpanchAddress(d.sarpanchAddress);
        if (d.villageName) setVillageName(d.villageName);
      }
    });

    // Load problems from Firestore in realtime
  useEffect(() => {
    const q = query(collection(db, "problems"), orderBy("submittedAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setProblems(list);
    });
    return () => unsub();
  }, []);

  
  // Load settings from Firestore
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "settings", "main"), (snap) => {
      if (snap.exists()) {
        const d = snap.data();
        if (d.villageName) setVillageName(d.villageName);
        if (d.sarpanchName) setSarpanchName(d.sarpanchName);
        if (d.sarpanchAddress) setSarpanchAddress(d.sarpanchAddress);
        if (d.whatsapp) setWhatsapp(d.whatsapp);
        if (d.instagram) setInstagram(d.instagram);
        if (d.adminPassword) setAdminPassword(d.adminPassword);
        if (d.theme) setTheme(d.theme);
        if (d.sarpanchPhoto) setSarpanchPhoto(d.sarpanchPhoto);
      }
    });
    return () => unsub();
  }, []);

  
  // Load achievements, media, notices, feedbacks from Firestore
  useEffect(() => {
    const unsub1 = onSnapshot(doc(db, "settings", "achievements"), (snap) => {
      if (snap.exists() && snap.data().list) setAchievements(snap.data().list);
    });
        const unsub2 = onSnapshot(doc(db, "settings", "media"), (snap) => {
          if (snap.exists() && snap.data().list) setMedia(snap.data().list);
        });
    const unsub3 = onSnapshot(doc(db, "settings", "notices"), (snap) => {
      if (snap.exists() && snap.data().list) setNotices(snap.data().list);
    });
    const unsub4 = onSnapshot(doc(db, "settings", "feedback"), (snap) => {
      if (snap.exists() && snap.data().list) setFeedbacks(snap.data().list);
    });
    return () => { unsub1(); unsub2(); unsub3(); unsub4(); };
  }, []);

  useEffect(() => {
    try {
      if (pw)   setAdminPassword(pw);
      if (vill) setVillageName(vill);
      if (sarp) setSarpanchName(sarp);
      if (ach)  setAchievements(JSON.parse(ach));
      if (med)  setMedia(JSON.parse(med));
      if (not)  setNotices(JSON.parse(not));
      if (fb)   setFeedbacks(JSON.parse(fb));
      if (wa)   setWhatsapp(wa);
      if (ig)   setInstagram(ig);
      const ph  = localStorage.getItem("gram-seva:sarpanchPhoto");
      const addr = localStorage.getItem("gram-seva:sarpanchAddress");
      const th   = localStorage.getItem("gram-seva:theme");
      if (ph)   setSarpanchPhoto(ph);
      if (addr) setSarpanchAddress(addr);
      if (th)   setTheme(th as "dark"|"light");
    } catch (_) {}
    setLoading(false);
  }, []);

  // Firebase auth listener
  useEffect(() => {
    // Handle Google redirect result
    getRedirectResult(auth).then(async (result) => {
      if (result?.user) {
        const user = result.user;
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (!userDoc.exists()) {
          await setDoc(doc(db, "users", user.uid), {
            name: user.displayName || "User",
            email: user.email,
            createdAt: new Date().toISOString(),
          });
        }
        setShowLogin(false);
      }
    }).catch((e) => { console.error("Redirect error:", e); });

    const unsub = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) setUserName(userDoc.data().name || "");
      } else { setUserName(""); }
    });
    return () => unsub();
  }, []);

  // Cache media for instant load
  useEffect(() => {
    if (media.length > 0) {
      try { localStorage.setItem('cached-media', JSON.stringify(media)); } catch {}
    }
  }, [media]);

  const saveProblems = (list: Problem[]) => {
    setProblems(list);
    // Problems saved to Firestore
  };

  const addProblem = async (p: Problem) => {
    try {
      const firestoreData = p as any;
      const cleanData = Object.fromEntries(Object.entries(firestoreData).filter(([_, v]) => v !== undefined));
      await setDoc(doc(db, "problems", p.id), cleanData);
      showToast(`✅ Problem submitted! Your ID: #${p.id}`);
      setPage("board");
    } catch(e: any) {
      showToast("❌ Submit failed. Try again.");
    }
  };

  const updateProblem = async (id: string, changes: Partial<Problem>) => {
    await updateDoc(doc(db, "problems", id), changes);
    showToast("✅ Problem updated successfully.");
  };

  const deleteProblem = async (id: string) => {
    await deleteDoc(doc(db, "problems", id));
    showToast("🗑 Issue deleted.");
  };

  const clearResolved = async () => {
    await Promise.all(problems.filter(p => p.status === "Resolved").map(p => deleteDoc(doc(db, "problems", p.id))));
    showToast("🗑 All resolved issues deleted.");
  };

  const clearAll = async () => {
    await Promise.all(problems.map(p => deleteDoc(doc(db, "problems", p.id))));
    showToast("🗑 All issues cleared.");
  };

  const saveAchievements = (list: Achievement[]) => {
    setAchievements(list);
    try { setDoc(doc(db, "settings", "achievements"), { list: list }); } catch (_) {}
  };

  const addAchievement = (a: Achievement) => saveAchievements([a, ...achievements]);
  const deleteAchievement = (id: string) => saveAchievements(achievements.filter(a => a.id !== id));

    const saveMedia = (list: MediaItem[]) => { setMedia(list); try { const cleanList = list.map(({photo, ...rest}) => rest); setDoc(doc(db, "settings", "media"), { list: cleanList }); } catch (_) {} };
    const addMedia = (m: MediaItem) => saveMedia([m, ...media]);
    const deleteMedia = (id: string) => saveMedia(media.filter(m => m.id !== id));

  const saveNotices = (list: Notice[]) => {
    setNotices(list);
    try { setDoc(doc(db, "settings", "notices"), { list: list }); } catch (_) {}
  };
  const addNotice    = (n: Notice) => saveNotices([n, ...notices]);
  const deleteNotice = (id: string) => saveNotices(notices.filter(n => n.id !== id));

  const saveFeedbacks  = (list: Feedback[]) => { setFeedbacks(list); try { setDoc(doc(db, "settings", "feedback"), { list: list }); } catch (_) {} };
  const addFeedback    = (f: Feedback) => saveFeedbacks([f, ...feedbacks]);
  const deleteFeedback = (id: string)  => saveFeedbacks(feedbacks.filter(f => f.id !== id));

  const saveSocial = (w: string, i: string) => {
    setWhatsapp(w); setInstagram(i);
    try { saveSettings({ whatsapp: w }); saveSettings({ instagram: i }); } catch (_) {}
  };
  const saveSarpanchPhoto = (p: string) => {
    setSarpanchPhoto(p);
    try { setDoc(doc(db, "settings", "main"), { sarpanchPhoto: p }, { merge: true }); localStorage.setItem("gram-seva:sarpanchPhoto", p); } catch (_) {}
  };

  const saveSarpanchAddress = (addr: string) => {
    setSarpanchAddress(addr);
    try { saveSettings({ sarpanchAddress: addr }); } catch (_) {}
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { saveSettings({ theme: next }); } catch (_) {}
  };

  const savePassword = (pw: string) => {
    try { setDoc(doc(db, "settings", "main"), { adminPassword: pw }, { merge: true }); } catch (_) {}
    setAdminPassword(pw);
    localStorage.setItem("gram-seva:adminPw", pw);
  };

  const saveInfo = (v: string, s: string) => {
    setVillageName(v); setSarpanchName(s);
    saveSettings({ villageName: v });
    saveSettings({ sarpanchName: s });
  };

  const showToast = (msg: string) => setToast(msg);

  const logout = () => { setIsAdmin(false); localStorage.removeItem("isAdmin"); setPage("home"); };

  const filtered = problems.filter(p => {
    if (filterCat    !== "All" && p.category !== filterCat)    return false;
    if (filterStatus !== "All" && p.status   !== filterStatus) return false;
    if (filterWard   !== "All" && p.ward     !== filterWard)   return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.id.includes(search.toUpperCase())) return false;
    return true;
  }).sort((a, b) => {
    if (sort === "newest") return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    if (sort === "oldest") return new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
    const order: Record<string, number> = { Urgent: 0, High: 1, Medium: 2, Low: 3 };
    return order[a.priority] - order[b.priority];
  });

  const stats = {
    total:      problems.length,
    pending:    problems.filter(p => p.status === "Pending").length,
    inprogress: problems.filter(p => p.status === "In Progress").length,
    resolved:   problems.filter(p => p.status === "Resolved").length,
  };

  const navLinks = [
    { id: "home"         as const, label: "⌂ Home" },
    { id: "notices"      as const, label: "📢 Notices" },
    { id: "achievements" as const, label: "🏆 Achievements" },
    { id: "board"        as const, label: "View All Issues" },
  ];

  return (
    <>
      {showSplash && <WelcomeSplash onDone={() => { localStorage.setItem("gsp-visited","1"); setShowSplash(false); }} />}
      <div data-theme={theme} style={{ minHeight:"100vh", background:"var(--bg-page)", color:"var(--text-main)" }} className="grid-bg"><div className="aurora-bg"><div className="ab ab1"/><div className="ab ab2"/><div className="ab ab3"/><div className="ab ab4"/></div>
      <style>{GLOBAL_STYLE}</style>

      {/* NAVBAR */}
      <nav style={{ padding: "10px 12px" }}>
        <div className="glass-dark" style={{ borderRadius: 14, padding: "8px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          {/* Logo + Name */}
          <div onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", flexShrink: 0 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9, flexShrink: 0,
              background: "linear-gradient(135deg, #16a34a 0%, #166534 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 2px 8px rgba(22,163,74,0.4)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,rgba(255,255,255,0.2) 0%,transparent 60%)", borderRadius: 9 }} />
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 12, color: "#fff", letterSpacing: "0.04em", position: "relative", zIndex: 1 }}>GSP</span>
            </div>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              {villageName}
            </span>
          </div>
          {/* Scrollable nav links */}
          <div style={{ flex: 1, overflowX: "auto", display: "flex", gap: 4, alignItems: "center", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
            {navLinks.map(l => (
              <button key={l.id} className="btn-ghost" onClick={() => setPage(l.id)}
                style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, background: page === l.id ? "var(--cbg12)" : "var(--cbg5)" }}>
                {l.label}
              </button>
            ))}
            {isAdmin && (
              <button className="btn-ghost" onClick={() => setPage("settings")}
                style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, background: page === "settings" ? "var(--cbg12)" : "var(--cbg5)", color: "#fbbf24" }}>
                ⚙️
              </button>
            )}
            {firebaseUser
              ? <button className="btn-ghost" onClick={() => signOut(auth)} style={{ borderRadius:8, padding:"5px 11px", fontSize:12, whiteSpace:"nowrap", flexShrink:0, color:"#f87171" }}>👤 Logout</button>
              : <button className="btn-white" onClick={() => setShowLogin(true)} style={{ borderRadius:8, padding:"5px 11px", fontSize:12, whiteSpace:"nowrap", flexShrink:0 }}>Login</button>}
            {isAdmin
              ? <button className="btn-ghost" onClick={logout} style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, color: "#f87171" }}>Logout</button>
              : <button className="btn-ghost" onClick={() => setPage("admin")} style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0 }}>Admin</button>}
            <button onClick={toggleTheme} style={{ borderRadius: 8, padding: "5px 11px", fontSize: 14, whiteSpace: "nowrap", flexShrink: 0, background: "var(--cbg7)", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }} title="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>

        {/* ── HOME ─────────────────────────────────────────────────────────── */}
        {page === "home" && (
          <div>
            {/* ── HERO ──────────────────────────────────────────────── */}
            <div style={{ padding:"52px 0 40px", position:"relative", overflow:"hidden" }}>
              {/* bg glow */}
              <div style={{ position:"absolute",width:600,height:600,borderRadius:"50%",top:-240,left:-180,background:"radial-gradient(circle,rgba(124,92,252,0.10) 0%,transparent 70%)",pointerEvents:"none" }}/>
              <div style={{ position:"absolute",width:400,height:400,borderRadius:"50%",bottom:-120,right:-60,background:"radial-gradient(circle,rgba(56,217,245,0.06) 0%,transparent 70%)",pointerEvents:"none" }}/>

              <div className="hero-split" style={{ display:"flex",alignItems:"center",gap:52,position:"relative" }}>
                {/* LEFT */}
                <div className="hero-left" style={{ flex:1,minWidth:0,display:"flex",flexDirection:"column",alignItems:"flex-start" }}>
                  <FadeIn>
                    <span style={{ display:"inline-flex",alignItems:"center",gap:7,padding:"5px 14px",borderRadius:100,fontSize:12,fontWeight:600,letterSpacing:"0.04em",background:"rgba(124,92,252,0.12)",border:"1px solid rgba(124,92,252,0.32)",color:"#b57bee",marginBottom:22 }}>
                      <span style={{ width:7,height:7,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px #4ade80",display:"inline-block",animation:"pulse-dot 2s infinite" }}/>
                      Digital Gram Panchayat Portal
                    </span>
                  </FadeIn>

                  <FadeIn delay={180}>
                    <h1 style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"clamp(28px,4.5vw,56px)",lineHeight:1.06,letterSpacing:"-0.03em",marginBottom:18 }}>
                      <span style={{ display:"block",color:"var(--text-main)" }}>Gram Sabha Pahrajpur</span>
                      <span className="shimmer-text" style={{ display:"block" }}>{villageName.split(" ").slice(-1)[0]}</span>
                      <span style={{ display:"block",color:"var(--ct4)",fontWeight:400,fontSize:"0.52em",marginTop:10,letterSpacing:"-0.01em",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Village Governance, Reimagined</span>
                    </h1>
                  </FadeIn>

                  <FadeIn delay={400}>
                    <p style={{ fontSize:15,color:"var(--ct45)",lineHeight:1.8,maxWidth:440,fontWeight:400,marginBottom:28 }}>
                      Report infrastructure problems. Track every resolution. Receive official notices from your Sarpanch — transparent and accountable governance.
                    </p>
                  </FadeIn>

                  <FadeIn delay={600}>
                    <div className="hero-ctas" style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
                      <button className="btn-white" onClick={() => setPage("submit")} style={{ borderRadius:14,padding:"13px 28px",fontSize:15,fontWeight:700,display:"flex",alignItems:"center",gap:8 }}>
                        📋 Report a Problem <span style={{ opacity:0.7 }}>→</span>
                      </button>
                      <button className="btn-ghost" onClick={() => setPage("board")} style={{ borderRadius:14,padding:"13px 28px",fontSize:15,fontWeight:600 }}>
                        📊 View All Issues
                      </button>
                    </div>
                  </FadeIn>

                  <FadeIn delay={820}>
                    <div style={{ marginTop:22,width:"100%" }}><AIPanel villageName={villageName} sarpanchName={sarpanchName} /></div>
                  </FadeIn>
                </div>

                {/* RIGHT — 3D Orb */}
                <div className="hero-orb-col" style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:16,flexShrink:0 }}>
                  <FadeIn delay={350}>
                    <div style={{ position:"relative",width:270,height:270 }}>
                      <div style={{ position:"absolute",inset:-40,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(124,92,252,0.22) 0%,transparent 70%)",animation:"pulseGlow 3s ease-in-out infinite",pointerEvents:"none" }}/>
                      <div style={{ position:"absolute",inset:16,borderRadius:"50%",background:"radial-gradient(ellipse at 35% 30%,rgba(181,123,238,0.95) 0%,rgba(124,92,252,0.75) 45%,rgba(56,217,245,0.45) 100%)",boxShadow:"0 0 60px rgba(124,92,252,0.55),0 0 120px rgba(124,92,252,0.22),inset 0 0 36px rgba(255,255,255,0.10)",animation:"floatOrb 5s ease-in-out infinite" }}>
                        <div style={{ position:"absolute",top:"14%",left:"20%",width:"38%",height:"22%",borderRadius:"50%",background:"rgba(255,255,255,0.26)",filter:"blur(7px)" }}/>
                        <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:19,color:"rgba(255,255,255,0.92)",letterSpacing:"0.06em",textShadow:"0 2px 12px rgba(0,0,0,0.4)" }}>GSP</div>
                      </div>
                      <div style={{ position:"absolute",top:"50%",left:"50%",width:11,height:11,marginTop:-5.5,marginLeft:-5.5,animation:"orbit1 5s linear infinite" }}><div style={{ width:11,height:11,borderRadius:"50%",background:"#38d9f5",boxShadow:"0 0 12px #38d9f5" }}/></div>
                      <div style={{ position:"absolute",top:"50%",left:"50%",width:8,height:8,marginTop:-4,marginLeft:-4,animation:"orbit2 7s linear infinite" }}><div style={{ width:8,height:8,borderRadius:"50%",background:"#f4c95d",boxShadow:"0 0 10px #f4c95d" }}/></div>
                      <div className="glass" style={{ position:"absolute",top:-6,right:-18,padding:"8px 14px",borderRadius:13,animation:"floatChip 4s ease-in-out infinite" }}>
                        <div style={{ fontSize:10,color:"var(--ct4)",marginBottom:2 }}>Resolved</div>
                        <div style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:19,color:"#4ade80" }}>{stats.resolved}</div>
                      </div>
                      <div className="glass" style={{ position:"absolute",bottom:6,left:-18,padding:"8px 14px",borderRadius:13,animation:"floatChip 4.5s ease-in-out infinite 0.8s" }}>
                        <div style={{ fontSize:10,color:"var(--ct4)",marginBottom:2 }}>Total</div>
                        <div style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:19,color:"#b57bee" }}>{stats.total}</div>
                      </div>
                      <div className="glass" style={{ position:"absolute",bottom:52,right:-20,padding:"6px 12px",borderRadius:11,animation:"floatChip 6s ease-in-out infinite 1.2s" }}>
                        <div style={{ display:"flex",alignItems:"center",gap:5 }}><div style={{ width:7,height:7,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 7px #4ade80",animation:"pulse-dot 2s infinite" }}/><span style={{ fontSize:11,color:"var(--text-main)",fontWeight:600 }}>Live</span></div>
                      </div>
                    </div>
                    {/* mini stats strip */}
                    <div className="glass" style={{ padding:0,borderRadius:16,overflow:"hidden",width:270,marginTop:14 }}>
                      <div style={{ display:"flex" }}>
                        {([{num:stats.total,label:"Total",color:"#b57bee"},{num:stats.resolved,label:"Done",color:"#4ade80"},{num:stats.pending,label:"Pending",color:"#f4c95d"},{num:stats.inprogress,label:"Active",color:"#38d9f5"}] as const).map((s,i)=>(
                          <div key={s.label} style={{ flex:1,textAlign:"center",padding:"11px 4px",borderRight:i<3?"1px solid rgba(124,92,252,0.10)":"none" }}>
                            <div style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:16,color:s.color }}>{s.num}</div>
                            <div style={{ fontSize:10,color:"var(--ct4)",marginTop:2,fontWeight:500 }}>{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>

            <FadeIn delay={1200}>
              <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
                <StatCard label="Total Problems" value={stats.total} color="#b57bee" />
                <StatCard label="Pending" value={stats.pending} color="#f4c95d" />
                <StatCard label="In Progress" value={stats.inprogress} color="#7c5cfc" />
                <StatCard label="Resolved" value={stats.resolved} color="#4ade80" />
              </div>
            </FadeIn>

            <FadeIn delay={1700}>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, marginBottom: 16, color: "var(--text-main)" }}>Issues by Category</h3>
              <CategoryGrid problems={problems} onNavigate={() => setPage("board")} />
            </FadeIn>

            {problems.length > 0 && (
              <FadeIn delay={1900}>
                <div style={{ marginTop: 40 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18, color: "var(--text-main)" }}>Recent Issues</h3>
                    <button className="btn-ghost" onClick={() => setPage("board")} style={{ borderRadius: 10, padding: "6px 14px", fontSize: 13 }}>View All</button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {problems.slice(0, 3).map(p => <ProblemCard key={p.id} problem={p} isAdmin={false} onUpdate={updateProblem} onDelete={deleteProblem} />)}
                  </div>
                </div>
              </FadeIn>
            )}

            {problems.length === 0 && !loading && (
              <FadeIn delay={1600}>
                <div className="glass" style={{ borderRadius: 20, padding: "48px 32px", textAlign: "center", marginTop: 20 }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🌱</div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 600, marginBottom: 8 }}>No issues reported yet</div>
                  <div style={{ color: "var(--ct4)", fontSize: 14, marginBottom: 24 }}>Be the first to report a problem in your village.</div>
                  <button className="btn-white" onClick={() => setPage("submit")} style={{ borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 600 }}>Submit First Problem →</button>
                </div>
              </FadeIn>
            )}

            {/* Sarpanch Profile + Social */}
            <FadeIn delay={1800}>
              <div style={{ marginTop: 40 }}>
                <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:18, marginBottom:14, color:"var(--text-main)" }}>Your Sarpanch</h3>
                <SarpanchCard sarpanchName={sarpanchName} photo={sarpanchPhoto} whatsapp={whatsapp} instagram={instagram} address={sarpanchAddress} />
              </div>
            </FadeIn>

            {/* Notices preview on home */}
            {notices.length > 0 && (
              <FadeIn delay={2000}>
                <div style={{ marginTop: 40 }}>
                  <NoticesPage notices={notices} isAdmin={isAdmin} onDelete={deleteNotice} compact onViewAll={() => setPage("notices")} />
                </div>
              </FadeIn>
            )}

            {/* Photo Carousel */}
            <FadeIn delay={1800}>
              <PhotoCarousel media={media} />
            </FadeIn>

            

            {/* Feedback Section */}
            <FadeIn delay={2200}>
              <div style={{ marginTop: 40 }}>
                <FeedbackSection feedbacks={feedbacks} onAdd={addFeedback} />
              </div>
            </FadeIn>

            {/* Made By tag */}
            <div style={{ marginTop: 60, textAlign: "center" }}>
              <span style={{ fontSize: 12, color: "var(--ct4)", letterSpacing: "0.08em", fontWeight: 500 }}>
                Made with ❤️ by <span style={{ color: "var(--text-main)", fontWeight: 700 }}>Abhinav Yadav</span>
              </span>
            </div>
          </div>
        )}

        {/* ── SUBMIT ───────────────────────────────────────────────────────── */}
        {page === "submit" && (
          <div style={{ paddingTop: 40 }}>
            {!firebaseUser ? (
              <FadeIn>
                <div className="glass" style={{ borderRadius:22, padding:"48px 24px", textAlign:"center", maxWidth:400, margin:"0 auto" }}>
                  <div style={{ fontSize:48, marginBottom:16 }}>🔒</div>
                  <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:600, fontSize:20, marginBottom:8, color:"var(--text-main)" }}>Login Zaroori Hai</h2>
                  <p style={{ fontSize:14, color:"var(--ct4)", marginBottom:24, lineHeight:1.6 }}>Samasya darj karne ke liye pehle login karein</p>
                  <button className="btn-white" onClick={() => setShowLogin(true)} style={{ borderRadius:12, padding:"13px 32px", fontSize:15, fontWeight:600 }}>📱 Login Karein</button>
                </div>
              </FadeIn>
            ) : (
              <FadeIn><SubmitForm onSubmit={addProblem} /></FadeIn>
            )}
          </div>
        )}

        {/* ── BOARD ────────────────────────────────────────────────────────── */}
        {page === "board" && (
          <div style={{ paddingTop: 32 }}>
            <FadeIn>
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 26, marginBottom: 6 }}>
                  {isAdmin ? "🛡 Admin Dashboard" : "All Reported Issues"}
                </h2>
                <p style={{ fontSize: 13, color: "var(--ct4)" }}>{filtered.length} of {problems.length} issues shown</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <FilterBar filterCat={filterCat} setFilterCat={setFilterCat} filterStatus={filterStatus} setFilterStatus={setFilterStatus}
                filterWard={filterWard} setFilterWard={setFilterWard} search={search} setSearch={setSearch} sort={sort} setSort={setSort} />
            </FadeIn>
            {loading ? (
              <div style={{ textAlign: "center", padding: 60, color: "var(--ct3)", fontSize: 14 }}>Loading…</div>
            ) : filtered.length === 0 ? (
              <FadeIn delay={200}>
                <div className="glass" style={{ borderRadius: 20, padding: "48px 32px", textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 600, marginBottom: 8 }}>No issues found</div>
                  <div style={{ color: "var(--ct4)", fontSize: 13 }}>{problems.length === 0 ? "No problems have been submitted yet." : "Try adjusting your filters."}</div>
                </div>
              </FadeIn>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {filtered.map((p, i) => (
                  <FadeIn key={p.id} delay={i * 40}>
                    <ProblemCard problem={p} isAdmin={isAdmin} onUpdate={updateProblem} onDelete={deleteProblem} />
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── NOTICES ──────────────────────────────────────────────────────── */}
        {page === "notices" && (
          <div style={{ paddingTop: 32, maxWidth: 800, margin: "0 auto" }}>
            <FadeIn>
              <NoticesPage notices={notices} isAdmin={isAdmin} onDelete={deleteNotice} />
            </FadeIn>
          </div>
        )}

        {/* ── GALLERY ──────────────────────────────────────────────────────── */}
        {page === "gallery" && (
          <div style={{ paddingTop: 32, maxWidth: 960, margin: "0 auto" }}>
            <FadeIn>
              <GalleryPage media={media} isAdmin={isAdmin} onDelete={deleteMedia} />
            </FadeIn>
          </div>
        )}

        {/* ── ACHIEVEMENTS ─────────────────────────────────────────────────── */}
        {page === "achievements" && (
          <div style={{ paddingTop: 32 }}>
            <AchievementsPage achievements={achievements} isAdmin={isAdmin} onDelete={deleteAchievement} />
          </div>
        )}

        {/* ── ADMIN LOGIN ───────────────────────────────────────────────────── */}
        {page === "admin" && !isAdmin && (
          <AdminLogin correctPassword={adminPassword} onLogin={() => { setIsAdmin(true); localStorage.setItem("isAdmin", "true"); localStorage.setItem("isAdmin-time", Date.now().toString()); setPage("board"); }} />
        )}

        {/* ── SETTINGS ─────────────────────────────────────────────────────── */}
        {page === "settings" && isAdmin && (
          <AdminSettings
            problems={problems} achievements={achievements} media={media} notices={notices} feedbacks={feedbacks} adminPassword={adminPassword}
            villageName={villageName} sarpanchName={sarpanchName} sarpanchPhoto={sarpanchPhoto} sarpanchAddress={sarpanchAddress} whatsapp={whatsapp} instagram={instagram}
            onSavePassword={savePassword} onSaveInfo={saveInfo} onSaveSocial={saveSocial} onSaveSarpanchPhoto={saveSarpanchPhoto} onSaveSarpanchAddress={saveSarpanchAddress}
            onClearResolved={clearResolved} onClearAll={clearAll}
            onAddAchievement={addAchievement} onDeleteAchievement={deleteAchievement}
            onAddMedia={addMedia} onDeleteMedia={deleteMedia}
            onAddNotice={addNotice} onDeleteNotice={deleteNotice}
            onDeleteFeedback={deleteFeedback}
            showToast={showToast}
          />
        )}
      </div>

      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
      {showLogin && <PhoneLogin onClose={() => setShowLogin(false)} />}
    </div>
    </>
  );
}
