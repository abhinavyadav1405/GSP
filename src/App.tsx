import React from "react";
import UserProfile from "./components/UserProfile";
import ProfileLookup from "./components/ProfileLookup";
import { useState, useEffect, useRef } from "react";
import { Camera, Image as ImageIcon, Video, Trash2, User, Bell, Trophy, LockKeyhole, Search, Phone, Download, Settings, Pencil, AlertTriangle, CheckCircle2, CalendarDays, MapPin, Map, FileText, Clipboard, Pin, Mic, Star, Clock3, RefreshCw, XCircle, Megaphone, Siren, Building2, PartyPopper, Droplets, Zap, Hospital, Waves, HardHat, Check, Home, LayoutDashboard, Plus, LogIn, ChevronUp, ChevronDown, ShieldAlert, Upload, CircleUserRound, Heart, MessageCircle, Send, Landmark } from "lucide-react";
import { Leaf } from "lucide-react";

import {
  db,
  collection, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc, query, orderBy, arrayUnion, arrayRemove,
  storage, ref, uploadBytes, getDownloadURL,
} from "./firebase";

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
  body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #f0eeff; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; background: #f0eeff; color: #1a1040; }
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
  @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(248,113,113,0.7)}50%{opacity:0.8;box-shadow:0 0 0 12px rgba(248,113,113,0)}}
  @keyframes bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}
  .shimmer-text{background:linear-gradient(90deg,#f0eeff 0%,#b57bee 28%,#38d9f5 50%,#b57bee 72%,#f0eeff 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmerTxt 4s linear infinite;}
  .grid-bg{background-image:linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px);background-size:44px 44px;}
  @media(max-width:768px){.hero-split{flex-direction:column!important;}.hero-orb-col{display:none!important;}.hero-ctas{justify-content:center!important;}.hero-left{text-align:center;align-items:center!important;}.feat-grid{grid-template-columns:1fr 1fr!important;}}
@media(max-width:576px){.mobile-topbar{padding:12px 14px;}.mobile-side-panel{width:240px;}.mobile-menu-indicator{top:82px;left:10px;padding:10px 12px;font-size:13px;}}
.mobile-shell{display:none;}
  .mobile-bottom-nav { display: none; }
  @media (max-width: 768px) {
    .mobile-bottom-nav {
      position: fixed; left: 0; right: 0; bottom: 0; width: 100%; height: 68px;
      display: flex; align-items: center; justify-content: space-around; padding: 6px 18px;
      background: rgba(255,255,255,0.96); border-top: 1px solid rgba(0,0,0,0.08);
      backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px); z-index: 9990;
      box-shadow: 0 -8px 30px rgba(0,0,0,0.08); padding-bottom: calc(6px + env(safe-area-inset-bottom));
    }
    .icon-inline { display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
    .mobile-nav-label { display: block; font-size: 9px; line-height: 1; margin-top: 3px; font-weight: 700; opacity: .58; letter-spacing: .01em; }
    .mobile-nav-item.active .mobile-nav-label { opacity: 1; }
    .mobile-nav-item { position: relative; width: 54px; height: 54px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: transparent; border: 0; cursor: pointer; -webkit-tap-highlight-color: transparent; }
    .mobile-nav-item svg { width: 29px; height: 29px; fill: none; stroke: #111; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; transition: transform .18s ease; }
    .mobile-nav-item.active::before { content: ''; position: absolute; top: 4px; width: 42px; height: 42px; background: rgba(124,92,252,0.12); border-radius: 50%; z-index: 0; box-shadow: 0 4px 14px rgba(124,92,252,0.3); }
    .mobile-nav-item.active svg { fill: none; stroke: #7c5cfc; transform: scale(1.1); position: relative; z-index: 1; }
    .mobile-nav-item.active .mobile-nav-label { color: #7c5cfc; opacity: 1; position: relative; z-index: 1; }
    .mobile-post-button { width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 0; background: #111; color: white; cursor: pointer; box-shadow: 0 5px 18px rgba(0,0,0,.22); transition: transform .18s ease; }
    .mobile-profile-avatar { width: 34px; height: 34px; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #111; border: 2px solid #111; font-size: 12px; font-weight: 700; color: white; }
    .mobile-profile-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .mobile-profile-dot { position: absolute; right: 5px; bottom: 7px; width: 11px; height: 11px; background: #ff3040; border: 2px solid white; border-radius: 50%; }
    body { padding-bottom: 72px; }
  }
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
interface Achievement { id: string; title: string; description: string; category: string; village: string; date: string; photo?: string; }
interface MediaItem { id: string; type: "photo" | "video"; title: string; caption?: string; url: string; createdAt: string; }
interface Notice { id: string; title: string; body: string; type: "urgent" | "meeting" | "scheme" | "event" | "general"; date: string; createdAt: string; }
interface Feedback { id: string; name: string; message: string; rating: number; createdAt: string; }
interface CommentItem { id: string; userId: string; userName: string; userAvatar?: string; text: string; createdAt: string; }
interface Problem {
  id: string; name: string; mobile: string; ward: string;
  category: string; title: string; description: string; caption?: string;
  priority: string; status: string; submittedAt: string;
  adminNotes: string; photo?: string; locationText?: string;
  locationCoords?: LatLng; authorId?: string; authorAvatar?: string;
  supporters?: string[]; likes?: string[]; comments?: CommentItem[];
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

function UiIcon({ name, size = 18, strokeWidth = 2, className }: { name: string; size?: number; strokeWidth?: number; className?: string; }) {
  const props = { size, strokeWidth, className };
  const icons: Record<string, React.ReactNode> = {
    "📷": <Camera {...props} />, "🖼️": <ImageIcon {...props} />, "🎬": <Video {...props} />, "🗑": <Trash2 {...props} />,
    "👤": <User {...props} />, "📢": <Megaphone {...props} />, "🏆": <Trophy {...props} />, "🔐": <LockKeyhole {...props} />,
    "🔍": <Search {...props} />, "📞": <Phone {...props} />, "⬇️": <Download {...props} />, "⚙️": <Settings {...props} />,
    "✏️": <Pencil {...props} />, "⚠️": <AlertTriangle {...props} />, "🚨": <Siren {...props} />, "📅": <CalendarDays {...props} />,
    "📍": <MapPin {...props} />, "🗺": <Map {...props} />, "📋": <Clipboard {...props} />, "📌": <Pin {...props} />,
    "📝": <FileText {...props} />, "🎤": <Mic {...props} />, "⭐": <Star {...props} />, "⏳": <Clock3 {...props} />,
    "🔄": <RefreshCw {...props} />, "❌": <XCircle {...props} />, "✅": <CheckCircle2 {...props} />, "🏛": <Building2 {...props} />,
    "🎉": <PartyPopper {...props} />, "💧": <Droplets {...props} />, "⚡": <Zap {...props} />, "🏥": <Hospital {...props} />,
    "🌊": <Waves {...props} />, "🏗": <HardHat {...props} />, "🛣": <Map {...props} />, "⌂": <Home {...props} />,
    "▦": <LayoutDashboard {...props} />, "＋": <Plus {...props} />, "➕": <Plus {...props} />, "🔎": <Search {...props} />,
    "🛡": <ShieldAlert {...props} />, "📤": <Upload {...props} />, "◉": <CircleUserRound {...props} />
  };
  return icons[name] ?? null;
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
  return <div style={{ position: "fixed", bottom: 90, left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.8)", color: "#fff", padding: "10px 20px", borderRadius: 20, zIndex: 10000, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>{msg}</div>;
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="glass" style={{ borderRadius: 16, padding: "20px 24px", flex: 1, minWidth: 120 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: 13, color: "var(--ct5)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

function SectionHead({ icon, title }: { icon: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ width: 22, height: 22, display: "grid", placeItems: "center" }}><UiIcon name={icon} size={19} /></span>
    </div>
  );
}

function PhotoUpload({ photo, onPhoto }: { photo: string | null; onPhoto: (b64: string | null) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [compressing, setCompressing] = useState(false);
  const process = async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setCompressing(true);
    try { onPhoto(await compressImage(file)); } catch (_) {}
    setCompressing(false);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {photo ? (
        <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
          <img src={photo} alt="Problem photo" style={{ width: "100%", maxHeight: 240, objectFit: "cover", display: "block" }} />
          <button onClick={() => onPhoto(null)} style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.7)", border: "none", color: "#fff", borderRadius: 8, padding: "4px 10px", fontSize: 12, cursor: "pointer" }}>✕ Remove</button>
        </div>
      ) : (
        <div onClick={() => inputRef.current?.click()} style={{ border: "2px dashed rgba(255,255,255,0.14)", borderRadius: 12, padding: "28px 20px", textAlign: "center", cursor: "pointer" }}>
          {compressing ? <div>Compressing…</div> : <><Camera size={28} style={{ marginBottom: 8 }} /><div>Click or drag a photo here</div></>}
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) process(f); }} />
    </div>
  );
}

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
            {problem.photo && <span style={{ fontSize: 14 }} title="Has photo"><Camera size={14} /></span>}
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
          {problem.locationText && (
            <div style={{ marginTop: 12, display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 14px", background: "rgba(59,130,246,0.06)", borderRadius: 10, border: "1px solid rgba(59,130,246,0.15)" }}>
              <span style={{ fontSize: 16 }}><MapPin size={16} /></span>
              <div>
                <div style={{ fontSize: 11, color: "var(--ct4)", marginBottom: 2 }}>Location / Landmark</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{problem.locationText}</div>
              </div>
            </div>
          )}
          {problem.photo && (
            <div style={{ marginTop: 14, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.10)" }}>
              <img src={problem.photo} alt="Problem photo" style={{ width: "100%", maxHeight: 320, objectFit: "cover", display: "block", cursor: "zoom-in" }}
                onClick={e => { e.stopPropagation(); window.open(problem.photo, "_blank"); }} />
              <div style={{ padding: "6px 12px", fontSize: 11, color: "var(--ct3)", background: "rgba(0,0,0,0.3)" }}><Camera size={13} style={{ verticalAlign: "middle" }} /> Photo attached</div>
            </div>
          )}
          <button onClick={shareOnWhatsApp} style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8, width: "100%", justifyContent: "center", padding: "10px 0", borderRadius: 10, border: "none", background: "rgba(37,211,102,0.12)", color: "#25d366", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
            Share on WhatsApp
          </button>
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
              <textarea rows={2} placeholder="Add admin note..." value={notes} onChange={e => setNotes(e.target.value)} />
              {!confirmDel ? (
                <button className="btn-danger" style={{ borderRadius: 10, padding: "8px 0", fontSize: 13 }} onClick={e => { e.stopPropagation(); setConfirmDel(true); }}>🗑 Delete</button>
              ) : (
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-danger" style={{ borderRadius: 10, padding: "8px 0", fontSize: 13, flex: 1 }} onClick={e => { e.stopPropagation(); onDelete?.(problem.id); }}>Confirm Delete</button>
                  <button className="btn-ghost" style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }} onClick={e => { e.stopPropagation(); setConfirmDel(false); }}>Cancel</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

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
      () => { setGpsErr("GPS failed."); setGpsLoading(false); }
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
      <button type="button" onClick={() => setOpen(!open)} className="btn-ghost" style={{ borderRadius: 12, padding: "10px 0", fontSize: 13, fontWeight: 600 }}>
        🗺 {coords ? `📍 Location Set (${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)})` : "Set Location (optional)"}
      </button>
      {open && (
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
          <div style={{ background: "rgba(0,0,0,0.5)", padding: "10px 14px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <button type="button" onClick={useGPS} className="btn-ghost" style={{ borderRadius: 8, padding: "6px 12px", fontSize: 12 }}>{gpsLoading ? "Locating…" : "📡 Use My GPS"}</button>
            <input value={manualLat} onChange={e => setManualLat(e.target.value)} placeholder="Lat" style={{ width: 80, fontSize: 12, padding: "5px 8px" }} />
            <input value={manualLng} onChange={e => setManualLng(e.target.value)} placeholder="Lng" style={{ width: 80, fontSize: 12, padding: "5px 8px" }} />
            <button type="button" onClick={applyManual} className="btn-ghost" style={{ borderRadius: 8, padding: "6px 12px", fontSize: 12 }}>Set</button>
            <button type="button" onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "var(--ct4)", cursor: "pointer", marginLeft: "auto" }}>✕</button>
          </div>
          {gpsErr && <div style={{ background: "rgba(239,68,68,0.1)", padding: "8px 14px", fontSize: 12, color: "#f87171" }}>{gpsErr}</div>}
          <iframe src={mapSrc} title="Map" style={{ width: "100%", height: 260, border: "none", display: "block" }} loading="lazy" />
        </div>
      )}
    </div>
  );
}

function SubmitForm({ onSubmit, onSubmitted, currentUser }: { onSubmit: (p: Problem) => Promise<void>; onSubmitted?: () => void; currentUser?: AppUser | null }) {
  const [caption, setCaption] = useState("");
  const [form, setForm] = useState({ name: currentUser?.name || "", mobile: currentUser?.mobile || "", ward: currentUser?.ward || WARDS[0], category: CATEGORIES[0], title: "", description: "", priority: "Medium" });
  const [photo, setPhoto] = useState<string | null>(null);
  const [locationText, setLocationText] = useState("");
  const [locationCoords, setLocationCoords] = useState<LatLng | null>(null);
  const [loading, setLoading] = useState(false);
  
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handle = async () => {
    if (!form.name || !form.mobile || !form.title || !form.description) { alert("Please fill all required fields."); return; }
    setLoading(true);
    const problem: Problem = {
      ...form, id: uuid(), submittedAt: new Date().toISOString(), status: "Pending", adminNotes: "", caption: caption.trim() || undefined, authorId: currentUser?.id, authorAvatar: currentUser?.avatar, supporters: [], likes: [], comments: [],
      photo: photo || undefined, locationText: locationText || undefined, locationCoords: locationCoords || undefined,
    };
    try {
      await onSubmit(problem);
      onSubmitted?.();
    } catch (_) {} finally { setLoading(false); }
  };

  const field = (label: string, children: React.ReactNode) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );

  return (
    <div className="glass" style={{ borderRadius: 22, padding: "28px 24px", maxWidth: 560, margin: "0 auto" }}>
      <h2 style={{ fontSize: 22, marginBottom: 20 }}>Submit a Problem</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {field("Your Name *", <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="Full name" />)}
          {field("Mobile No. *", <input value={form.mobile} onChange={e => set("mobile", e.target.value)} placeholder="10-digit number" type="tel" />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {field("Ward / Area", <select value={form.ward} onChange={e => set("ward", e.target.value)}>{WARDS.map(w => <option key={w}>{w}</option>)}</select>)}
          {field("Category", <select value={form.category} onChange={e => set("category", e.target.value)}>{CATEGORIES.map(c => <option key={c}>{c}</option>)}</select>)}
        </div>
        {field("Problem Title *", <input value={form.title} onChange={e => set("title", e.target.value)} placeholder="Short title" maxLength={100} />)}
        {field("Caption", <textarea rows={2} value={caption} onChange={e => setCaption(e.target.value)} placeholder="Short caption" maxLength={220} />)}
        {field("Description *", <textarea rows={4} value={form.description} onChange={e => set("description", e.target.value)} placeholder="Detailed description..." maxLength={500} />)}
        {field("Photo (optional)", <PhotoUpload photo={photo} onPhoto={setPhoto} />)}
        {field("Location (optional)", <input value={locationText} onChange={e => setLocationText(e.target.value)} placeholder="Landmark..." maxLength={200} />)}
        {field("Pin on Map", <LocationPicker coords={locationCoords} onCoords={setLocationCoords} />)}
        <button className="btn-white" onClick={handle} disabled={loading} style={{ borderRadius: 12, padding: "13px 0", fontSize: 15, fontWeight: 600 }}>
          {loading ? "Submitting…" : "Submit Problem →"}
        </button>
      </div>
    </div>
  );
}

function AuthPage({ onLogin }: { onLogin: (u: AppUser) => void }) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [ward, setWard] = useState(WARDS[0]);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    setErr("");
    if (!id.trim() || !password) { setErr("ID aur password required hai."); return; }
    setBusy(true);
    try {
      const userRef = doc(db, "users", id.trim().toLowerCase());
      if (mode === "login") {
        const snap = await getDoc(userRef);
        if (!snap.exists()) { setErr("User ID nahi mila."); return; }
        const data = snap.data() as any;
        const hash = await hashPassword(password);
        if (data.passwordHash !== hash) { setErr("Galat password."); return; }
        const user: AppUser = { id: data.id || id.trim().toLowerCase(), name: data.name, mobile: data.mobile, ward: data.ward || WARDS[0], createdAt: data.createdAt || new Date().toISOString(), avatar: data.avatar };
        localStorage.setItem("gsp-user", JSON.stringify(user));
        onLogin(user);
      } else {
        const user: AppUser = { id: id.trim().toLowerCase(), name: name.trim(), mobile: mobile.trim(), ward, createdAt: new Date().toISOString() };
        await setDoc(userRef, { ...user, passwordHash: await hashPassword(password) });
        localStorage.setItem("gsp-user", JSON.stringify(user));
        onLogin(user);
      }
    } catch (e) { setErr("Connection error."); } finally { setBusy(false); }
  };

  return (
    <div style={{ maxWidth: 440, margin: "55px auto 90px" }}>
      <div className="glass" style={{ borderRadius: 24, padding: "30px 26px" }}>
        <h2 style={{ fontSize: 24, marginBottom: 16 }}>{mode === "login" ? "User Login" : "Create Account"}</h2>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <button className={mode === "login" ? "btn-white" : "btn-ghost"} onClick={() => setMode("login")} style={{ flex: 1, padding: 8, borderRadius: 8 }}>Login</button>
          <button className={mode === "register" ? "btn-white" : "btn-ghost"} onClick={() => setMode("register")} style={{ flex: 1, padding: 8, borderRadius: 8 }}>Register</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {mode === "register" && <>
            <input placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Mobile number" value={mobile} onChange={e => setMobile(e.target.value)} type="tel" />
            <select value={ward} onChange={e => setWard(e.target.value)}>{WARDS.map(w => <option key={w}>{w}</option>)}</select>
          </>}
          <input placeholder="User ID" value={id} onChange={e => setId(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {err && <div style={{ color: "#f87171", fontSize: 13 }}>{err}</div>}
          <button className="btn-white" onClick={submit} disabled={busy} style={{ padding: 12, borderRadius: 10 }}>{busy ? "Please wait…" : "Continue →"}</button>
        </div>
      </div>
    </div>
  );
}

function CommunityPostCard({ problem, user, onUpdate, onOpenLogin }: { problem: Problem; user: AppUser | null; onUpdate: (id: string, changes: any) => Promise<void> | void; onOpenLogin: () => void }) {
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const likes = problem.likes || [];
  const supporters = problem.supporters || [];
  const comments = problem.comments || [];
  const liked = !!user && likes.includes(user.id);
  const supported = !!user && supporters.includes(user.id);
  const doAuth = (fn: () => void) => { if (!user) { onOpenLogin(); return; } fn(); };
  
  const toggleArray = async (field: "likes" | "supporters") => {
    if (!user) { onOpenLogin(); return; }
    const arr = field === "likes" ? likes : supporters;
    const has = arr.includes(user.id);
    await onUpdate(problem.id, { [field]: has ? arrayRemove(user.id) : arrayUnion(user.id) });
  };

  const addComment = async () => {
    if (!user) { onOpenLogin(); return; }
    if (!comment.trim()) return;
    const c: CommentItem = { id: uuid(), userId: user.id, userName: user.name, userAvatar: user.avatar, text: comment.trim(), createdAt: new Date().toISOString() };
    await onUpdate(problem.id, { comments: arrayUnion(c) });
    setComment(""); setShowComments(true);
  };

  return (
    <article className="glass" style={{ borderRadius: 18, overflow: "hidden", marginBottom: 16 }}>
      <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#7c5cfc,#38d9f5)", display: "grid", placeItems: "center", fontWeight: 800, color: "#fff", overflow: "hidden" }}>
          {problem.authorAvatar ? <img src={problem.authorAvatar} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (problem.name || "U").slice(0,1).toUpperCase()}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 13 }}>{problem.name}</div>
          <div style={{ color: "var(--ct4)", fontSize: 11 }}>{problem.ward} · {fmtDate(problem.submittedAt)}</div>
        </div>
        <Badge text={STATUS_META[problem.status]?.label || problem.status} color={STATUS_META[problem.status]?.color || "#aaa"} />
      </div>
      <div style={{ padding: "12px 16px 16px" }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}><Badge text={problem.category} color={CAT_COLORS[problem.category] || "#aaa"} /><Badge text={problem.priority} color={PRIORITY_META[problem.priority]?.color || "#aaa"} /></div>
      <div style={{ fontSize: 15, fontWeight: 700 }}>{problem.title}</div>
      <div style={{ color: "var(--ct65)", fontSize: 13, lineHeight: 1.6, marginTop: 5 }}>{problem.caption || problem.description}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, borderTop: "1px solid var(--cbg7)", paddingTop: 10 }}>
        <button className="btn-ghost" onClick={() => doAuth(() => toggleArray("likes"))} style={{ border: "none", borderRadius: 10, padding: "7px 9px", fontSize: 18 }}>{liked ? "❤️" : "🤍"} <span style={{ fontSize: 12 }}>{likes.length}</span></button>
        <button className="btn-ghost" onClick={() => setShowComments(v => !v)} style={{ border: "none", borderRadius: 10, padding: "7px 9px", fontSize: 18 }}>💬 <span style={{ fontSize: 12 }}>{comments.length}</span></button>
        <button className="btn-ghost" onClick={share} style={{ border: "none", borderRadius: 10, padding: "7px 9px", fontSize: 18 }}>↗️</button>
        <button onClick={() => doAuth(() => toggleArray("supporters"))} style={{ marginLeft: "auto", borderRadius: 999, padding: "8px 14px", border: `1px solid ${supported ? "rgba(74,222,128,.5)" : "var(--btn-ghost-border)"}`, background: supported ? "rgba(74,222,128,.12)" : "var(--btn-ghost-bg)", color: supported ? "#4ade80" : "var(--btn-ghost-color)", cursor: "pointer", fontWeight: 700, fontSize: 12 }}>{supported ? "✓ Supporting" : "+ Support"} · {supporters.length}</button>
      </div>
      {showComments && <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--cbg7)" }}>
        {comments.slice(-5).map(c => <div key={c.id} style={{ padding: "7px 0", fontSize: 12 }}><b>{c.userName}</b> <span style={{ color: "var(--ct65)" }}>{c.text}</span></div>)}
        {user ? <div style={{ display: "flex", gap: 7, marginTop: 6 }}><input value={comment} onChange={e => setComment(e.target.value)} placeholder="Write a comment…" onKeyDown={e => e.key === "Enter" && addComment()} /><button className="btn-white" onClick={addComment} style={{ width: 80, borderRadius: 10 }}>Send</button></div> : <button className="btn-ghost" onClick={onOpenLogin} style={{ width: "100%", borderRadius: 10, padding: 9 }}>Login to comment</button>}
      </div>}
    </div>
  </article>;
}
