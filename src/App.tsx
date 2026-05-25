import { useState, useEffect, useRef } from "react";

const GLOBAL_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }

  /* ── Dark theme variables (default) ── */
  :root {
    --bg-page:   #050508;
    --text-main: #ffffff;
    --ct65: rgba(255,255,255,0.65);
    --ct6:  rgba(255,255,255,0.60);
    --ct5:  rgba(255,255,255,0.50);
    --ct45: rgba(255,255,255,0.45);
    --ct4:  rgba(255,255,255,0.40);
    --ct35: rgba(255,255,255,0.35);
    --ct3:  rgba(255,255,255,0.30);
    --cbg12: rgba(255,255,255,0.12);
    --cbg8:  rgba(255,255,255,0.08);
    --cbg7:  rgba(255,255,255,0.07);
    --cbg6:  rgba(255,255,255,0.06);
    --cbg5:  rgba(255,255,255,0.05);
    --cbg4:  rgba(255,255,255,0.04);
    --cb25:  rgba(255,255,255,0.25);
    --cb20:  rgba(255,255,255,0.20);
    --cb15:  rgba(255,255,255,0.15);
    --cb10:  rgba(255,255,255,0.10);
    --glass-bg:   rgba(255,255,255,0.04);
    --glass-border: rgba(255,255,255,0.10);
    --navbar-bg:  rgba(0,0,0,0.45);
    --input-bg:   rgba(255,255,255,0.05);
    --input-border: rgba(255,255,255,0.12);
    --input-color: #fff;
    --input-placeholder: rgba(255,255,255,0.3);
    --select-option-bg: #111;
    --btn-ghost-bg: rgba(255,255,255,0.07);
    --btn-ghost-color: #fff;
    --btn-ghost-border: rgba(255,255,255,0.15);
    --scrollbar: rgba(255,255,255,0.15);
    --grid-line: rgba(255,255,255,0.02);
  }

  /* ── Light theme variables ── */
  [data-theme="light"] {
    --bg-page:   #eef1f6;
    --text-main: #0f0f0f;
    --ct65: #222;
    --ct6:  #333;
    --ct5:  #444;
    --ct45: #555;
    --ct4:  #666;
    --ct35: #777;
    --ct3:  #888;
    --cbg12: rgba(0,0,0,0.08);
    --cbg8:  rgba(0,0,0,0.05);
    --cbg7:  rgba(0,0,0,0.05);
    --cbg6:  rgba(0,0,0,0.04);
    --cbg5:  rgba(0,0,0,0.04);
    --cbg4:  rgba(0,0,0,0.03);
    --cb25:  rgba(0,0,0,0.20);
    --cb20:  rgba(0,0,0,0.15);
    --cb15:  rgba(0,0,0,0.12);
    --cb10:  rgba(0,0,0,0.10);
    --glass-bg:   rgba(255,255,255,0.80);
    --glass-border: rgba(0,0,0,0.10);
    --navbar-bg:  rgba(255,255,255,0.92);
    --input-bg:   rgba(0,0,0,0.04);
    --input-border: rgba(0,0,0,0.15);
    --input-color: #0f0f0f;
    --input-placeholder: rgba(0,0,0,0.35);
    --select-option-bg: #fff;
    --btn-ghost-bg: rgba(0,0,0,0.06);
    --btn-ghost-color: #0f0f0f;
    --btn-ghost-border: rgba(0,0,0,0.15);
    --scrollbar: rgba(0,0,0,0.15);
    --grid-line: rgba(0,0,0,0.04);
  }

  .glass {
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    position: relative;
    overflow: hidden;
  }
  .glass::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(160deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.04) 40%,rgba(255,255,255,0.0) 60%,rgba(255,255,255,0.10) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
  [data-theme="light"] .glass::before { display: none; }

  .glass-dark {
    background: var(--navbar-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    position: relative; overflow: hidden;
  }

  .btn-white { background:#0f0f0f; color:#fff; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-weight:500; transition:all 0.2s; }
  [data-theme="light"] .btn-white { background:#0f0f0f; color:#fff; }
  .btn-white:hover { background:#333; transform:translateY(-1px); }
  .btn-white:disabled { opacity:0.5; cursor:not-allowed; transform:none; }

  .btn-ghost { background:var(--btn-ghost-bg); color:var(--btn-ghost-color); border:1px solid var(--btn-ghost-border); cursor:pointer; font-family:'DM Sans',sans-serif; font-weight:500; transition:all 0.2s; }
  .btn-ghost:hover { filter: brightness(1.1); }

  .btn-danger { background:rgba(239,68,68,0.12); color:#f87171; border:1px solid rgba(239,68,68,0.25); cursor:pointer; font-family:'DM Sans',sans-serif; font-weight:500; transition:all 0.2s; }
  [data-theme="light"] .btn-danger { color:#c00; }
  .btn-danger:hover { background:rgba(239,68,68,0.22); }

  input, textarea, select {
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    color: var(--input-color);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    border-radius: 10px;
    padding: 10px 14px;
    width: 100%;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  input:focus, textarea:focus, select:focus {
    border-color: var(--cb25);
    box-shadow: 0 0 0 3px var(--cbg6);
  }
  input::placeholder, textarea::placeholder { color: var(--input-placeholder); }
  select option { background: var(--select-option-bg); color: var(--input-color); }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--scrollbar); border-radius: 4px; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

  .grid-bg {
    background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
                      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;

const uuid = () => Math.random().toString(36).slice(2, 10).toUpperCase();
const fmtDate = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

const STATUS_META: Record<string, { color: string; bg: string; label: string }> = {
  Pending:       { color: "#f59e0b", bg: "rgba(245,158,11,0.15)",  label: "⏳ Pending" },
  "In Progress": { color: "#3b82f6", bg: "rgba(59,130,246,0.15)",  label: "🔄 In Progress" },
  Resolved:      { color: "#22c55e", bg: "rgba(34,197,94,0.15)",   label: "✅ Resolved" },
  Rejected:      { color: "#ef4444", bg: "rgba(239,68,68,0.15)",   label: "❌ Rejected" },
};
const PRIORITY_META: Record<string, { color: string; label: string }> = {
  Low:    { color: "#94a3b8", label: "Low" },
  Medium: { color: "#f59e0b", label: "Medium" },
  High:   { color: "#f97316", label: "High" },
  Urgent: { color: "#ef4444", label: "🚨 Urgent" },
};
const CATEGORIES = ["Water Supply","Road / Path","Electricity","Drainage","Sanitation","Education","Health","Street Light","Other"];
const WARDS = ["Chhatarsar", "Pahrajpur", "Chakjalal", "Chakmoti", "Chakjiya", "Other"];
const CAT_COLORS: Record<string, string> = {
  "Water Supply": "#3b82f6","Road / Path": "#a855f7","Electricity": "#f59e0b",
  "Drainage": "#06b6d4","Sanitation": "#10b981","Education": "#ec4899",
  "Health": "#ef4444","Street Light": "#fbbf24","Other": "#6b7280",
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

const compressImage = (file: File, maxW = 1200, quality = 0.75): Promise<string> =>
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
    <h1 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.04em" }}>
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
      <div style={{ fontSize: 32, fontWeight: 700, color, fontFamily: "'Sora',sans-serif" }}>{value}</div>
      <div style={{ fontSize: 13, color: "var(--ct5)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

// ── Section heading for settings ──────────────────────────────────────────────
function SectionHead({ icon, title }: { icon: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ fontSize: 20 }}>{icon}</span>
      <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 17 }}>{title}</h3>
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
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ct6)" }}>Click or drag a photo here</div>
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
      `🏘 *ग्राम सभा पहराजपुर — समस्या रिपोर्ट*\n\n` +
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
          <span>👤 {problem.name} · 📞 {problem.mobile}</span>
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

          {problem.adminNot
