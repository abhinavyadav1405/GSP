import { useState } from "react";
import UserProfile from "./UserProfile";

interface ProblemLike {
  id: string;
  name: string;
  mobile: string;
  ward: string;
  status: string;
}

interface ProfileLookupProps {
  problems: ProblemLike[];
  theme?: "dark" | "light";
}

export default function ProfileLookup({ problems, theme = "dark" }: ProfileLookupProps) {
  const [input, setInput] = useState("");
  const [mobile, setMobile] = useState<string | null>(null);

  const isDark = theme === "dark";
  const c = {
    bg: isDark ? "#0c0d16" : "#ffffff",
    text: isDark ? "#eef1f6" : "#050508",
    border: isDark ? "#1c1e2a" : "#e2e5ee",
    subtle: isDark ? "#9296ab" : "#5a5f73",
    accent: "#5b5ff0",
  };

  if (!mobile) {
    return (
      <div
        className="glass"
        style={{
          borderRadius: 22,
          padding: "28px 24px",
          maxWidth: 420,
          margin: "0 auto",
          color: c.text,
        }}
      >
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22, marginBottom: 16 }}>
          My Profile
        </h2>
        <p style={{ fontSize: 13, color: c.subtle, marginBottom: 12 }}>
          Apna mobile number daalo jisse problem submit ki thi:
        </p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="10-digit mobile number"
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 12,
            border: `1px solid ${c.border}`,
            background: isDark ? "#181a26" : "#eef1f6",
            color: c.text,
            fontSize: 15,
            marginBottom: 14,
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={() => input.trim() && setMobile(input.trim())}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 12,
            border: "none",
            background: c.accent,
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          View Profile
        </button>
      </div>
    );
  }

  const mine = problems.filter((p) => p.mobile === mobile);
  const latest = mine[mine.length - 1];

  if (mine.length === 0) {
    return (
      <div style={{ textAlign: "center", color: c.text, padding: 24 }}>
        <p>Is number se koi problem submit nahi mili.</p>
        <button onClick={() => setMobile(null)} style={{ marginTop: 12, background: "none", border: "none", color: c.accent, cursor: "pointer" }}>
          ← Try another number
        </button>
      </div>
    );
  }

  return (
    <div>
      <UserProfile
        userId={mobile}
        name={latest.name}
        address={latest.ward}
        contactNo={mobile}
        submittedCount={mine.length}
        solvedCount={mine.filter((p) => p.status === "Resolved").length}
        theme={theme}
      />
      <div style={{ textAlign: "center", marginTop: 14 }}>
        <button onClick={() => setMobile(null)} style={{ background: "none", border: "none", color: c.accent, fontSize: 13, cursor: "pointer" }}>
          ← Change number
        </button>
      </div>
    </div>
  );
}
