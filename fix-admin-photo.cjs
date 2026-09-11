const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

const oldAdminBlock = `{isAdmin ? (
          <div style={{ maxWidth: 600, margin: "0 auto", padding: "30px 16px" }}>
            <div className="glass" style={{ borderRadius: 24, padding: "32px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
                <div style={{ width: 84, height: 84, borderRadius: "50%", background: "linear-gradient(135deg, #fbbf24, #d97706)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 8px 22px rgba(245,158,11,0.35)", flexShrink: 0 }}>
                  <ShieldAlert size={42} />
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#fbbf24", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Authorized Administrator</div>
                  <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, margin: 0 }}>{sarpanchName || "Portal Admin"}</h2>
                  <div style={{ color: "var(--ct4)", fontSize: 13, marginTop: 4 }}>Role: {adminRole === "super" ? "Super Admin" : adminRole === "user-admin" ? "User Admin" : "Complaint Admin"}</div>
                </div>
              </div>`;

const newAdminBlock = `{isAdmin ? (
          <div style={{ maxWidth: 600, margin: "0 auto", padding: "30px 16px" }}>
            <div className="glass" style={{ borderRadius: 24, padding: "32px 24px", border: "1px solid rgba(251,191,36,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
                <div style={{ width: 90, height: 90, borderRadius: "50%", background: "linear-gradient(135deg, #fbbf24, #d97706)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 10px 25px rgba(245,158,11,0.4)", flexShrink: 0, overflow: "hidden", border: "3px solid rgba(251,191,36,0.6)" }}>
                  {sarpanchPhoto ? (
                    <img src={sarpanchPhoto} alt="Admin" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <span style={{ fontSize: 36, fontWeight: 800 }}>{(sarpanchName || "A").slice(0,1).toUpperCase()}</span>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "#fbbf24", background: "rgba(251,191,36,0.12)", padding: "3px 10px", borderRadius: 20, marginBottom: 6 }}>
                    ⭐ Verified Administrator
                  </div>
                  <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, margin: 0 }}>{sarpanchName || "Portal Admin"}</h2>
                  <div style={{ color: "var(--ct4)", fontSize: 13, marginTop: 4 }}>
                    Role: <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{adminRole === "super" ? "Super Admin" : adminRole === "user-admin" ? "User Admin" : "Complaint Admin"}</span>
                  </div>
                </div>
              </div>`;

if (c.includes(oldAdminBlock)) {
  c = c.replace(oldAdminBlock, newAdminBlock);
  fs.writeFileSync(f, c);
  console.log('✅ Admin Profile Photo & Premium Style Fixed Successfully!');
} else {
  console.log('⚠️ Could not match exact admin block, trying alternative replacement...');
  // Fallback replacement if formatting differs slightly
  c = c.replace(
    'display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 8px 22px rgba(245,158,11,0.35)", flexShrink: 0',
    'display: "grid", placeItems: "center", color: "#fff", overflow: "hidden", border: "3px solid rgba(251,191,36,0.6)"'
  );
  fs.writeFileSync(f, c);
  console.log('✅ Applied fallback profile fix.');
}
