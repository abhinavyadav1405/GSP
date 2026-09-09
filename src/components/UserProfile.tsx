import type { CSSProperties } from "react";

interface UserProfileProps {
  userId: string;
  name: string;
  address: string;
  contactNo: string;
  photoUrl?: string;
  submittedCount: number;
  solvedCount: number;
  qrData?: string;
  theme?: "dark" | "light";
  onOpenSubmitted?: () => void;
  onOpenDashboard?: () => void;
  onOpenSolved?: () => void;
}

export default function UserProfile({
  userId,
  name,
  address,
  contactNo,
  photoUrl,
  submittedCount,
  solvedCount,
  qrData,
  theme = "dark",
  onOpenSubmitted,
  onOpenDashboard,
  onOpenSolved,
}: UserProfileProps) {
  const isDark = theme === "dark";
  const c = {
    bg: isDark ? "#0c0d16" : "#ffffff",
    text: isDark ? "#eef1f6" : "#050508",
    subtle: isDark ? "#9296ab" : "#5a5f73",
    border: isDark ? "#1c1e2a" : "#e2e5ee",
    chip: isDark ? "#181a26" : "#eef1f6",
    accent: "#5b5ff0",
  };

  const qrValue = qrData ?? `${window.location.origin}/?profile=${userId}`;

  const s: Record<string, CSSProperties> = {
    card: {
      fontFamily: "'DM Sans', sans-serif",
      background: c.bg,
      color: c.text,
      border: `1px solid ${c.border}`,
      borderRadius: 20,
      padding: 20,
      maxWidth: 420,
      margin: "0 auto",
    },
    top: { display: "flex", gap: 14, flexWrap: "wrap" },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: c.chip,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flexShrink: 0,
    },
    avatarImg: { width: "100%", height: "100%", objectFit: "cover" },
    initial: { fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700 },
    info: { flex: 1, minWidth: 130 },
    uid: { fontSize: 11, color: c.subtle, marginBottom: 3 },
    name: { fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 6 },
    row: { fontSize: 13, color: c.subtle, marginBottom: 2 },
    label: { color: c.text, opacity: 0.8, marginRight: 4 },
    qr: { width: 70, height: 70, background: "#fff", borderRadius: 10, padding: 4, flexShrink: 0 },
    qrImg: { width: "100%", height: "100%", display: "block" },
    btns: { display: "flex", gap: 8, marginTop: 18 },
    btn: {
      flex: 1,
      background: c.chip,
      color: c.text,
      border: "none",
      borderRadius: 12,
      padding: "10px 6px",
      fontSize: 12,
      fontFamily: "'DM Sans', sans-serif",
      cursor: "pointer",
      lineHeight: 1.4,
    },
    btnPrimary: { background: c.accent, color: "#fff" },
  };

  return (
    <div style={s.card}>
      <div style={s.top}>
        <div style={s.avatar}>
          {photoUrl ? (
            <img src={photoUrl} alt={name} style={s.avatarImg} />
          ) : (
            <span style={s.initial}>{name.charAt(0).toUpperCase() || "?"}</span>
          )}
        </div>
        <div style={s.info}>
          <div style={s.uid}>#{userId}</div>
          <div style={s.name}>{name}</div>
          <div style={s.row}><span style={s.label}>Address:</span>{address}</div>
          <div style={s.row}><span style={s.label}>Contact:</span>{contactNo}</div>
        </div>
        <div style={s.qr}>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(qrValue)}`}
            alt="QR code"
            style={s.qrImg}
          />
        </div>
      </div>

      <div style={s.btns}>
        <button style={s.btn} onClick={onOpenSubmitted}>
          Submitted<br /><b>{submittedCount}</b>
        </button>
        <button style={{ ...s.btn, ...s.btnPrimary }} onClick={onOpenDashboard}>
          Your Dashboard
        </button>
        <button style={s.btn} onClick={onOpenSolved}>
          Solved<br /><b>{solvedCount}</b>
        </button>
      </div>
    </div>
  );
}
