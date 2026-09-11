const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

// 1. Update AdminSettings initial states to be clean general inputs with placeholders
c = c.replace(
  'const [village, setVillage]   = useState(villageName);',
  'const [village, setVillage]   = useState("");'
);
c = c.replace(
  'const [sarpanch, setSarpanch] = useState(sarpanchName);',
  'const [sarpanch, setSarpanch] = useState("");'
);
c = c.replace(
  'const [addr, setAddr]         = useState(sarpanchAddress);',
  'const [addr, setAddr]         = useState("");'
);

// Update Village & Sarpanch Info input placeholders
c = c.replace(
  'placeholder="ग्राम सभा पहराजपुर"',
  'placeholder={villageName || "Enter village name"}'
);
c = c.replace(
  'placeholder="Priyanka Yadav"',
  'placeholder={sarpanchName || "Enter sarpanch name"}'
);
c = c.replace(
  'placeholder="Gram Sabha Pahrajpur, Ballia, Uttar Pradesh"',
  'placeholder={sarpanchAddress || "Enter full address"}'
);

// 2. Enhance Admin Profile Section with full details and stats
const adminProfileOld = `        {isAdmin ? (
          <div style={{ maxWidth: 500, margin: "0 auto", padding: "40px 16px" }}>
            <div className="glass" style={{ borderRadius: 24, padding: "40px 32px", textAlign: "center" }}>
              <div style={{ width: 80, height: 80, margin: "0 auto 20px", borderRadius: "50%", background: "linear-gradient(135deg, #fbbf24, #f59e0b)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 10px 25px rgba(245,158,11,0.3)" }}>
                <ShieldAlert size={40} />
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, marginBottom: 6 }}>Admin Profile</h2>
              <div style={{ color: "var(--ct4)", fontSize: 15, marginBottom: 32, fontWeight: 500 }}>
                Role: {adminRole === "super" ? "Super Admin" : adminRole === "user-admin" ? "User Admin" : "Complaint Admin"}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {canManageComplaints && (
                  <button className="btn-white" onClick={() => setPage("settings")} style={{ padding: "16px", borderRadius: 16, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "linear-gradient(135deg, #fbbf24, #d97706)" }}>
                    <Settings size={20} /> Portal Settings & Info
                  </button>
                )}
                {canManageUsers && (
                  <button className="btn-white" onClick={() => setPage("manageusers")} style={{ padding: "16px", borderRadius: 16, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "linear-gradient(135deg, #38d9f5, #0891b2)" }}>
                    <User size={20} /> Manage Users & Blocklist
                  </button>
                )}
                <button className="btn-danger" onClick={logout} style={{ padding: "16px", borderRadius: 16, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 12 }}>
                  <LogIn size={20} style={{transform:"rotate(180deg)"}} /> Logout Admin
                </button>
              </div>
            </div>
          </div>
        ) :`;

const adminProfileNew = `        {isAdmin ? (
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
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 24 }}>
                <div className="glass" style={{ borderRadius: 14, padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#fbbf24" }}>{problems.length}</div>
                  <div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 2 }}>Total Issues</div>
                </div>
                <div className="glass" style={{ borderRadius: 14, padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#38d9f5" }}>{notices.length}</div>
                  <div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 2 }}>Notices</div>
                </div>
                <div className="glass" style={{ borderRadius: 14, padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#4ade80" }}>{achievements.length}</div>
                  <div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 2 }}>Works</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {canManageComplaints && (
                  <button className="btn-white" onClick={() => setPage("settings")} style={{ padding: "14px", borderRadius: 14, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(135deg, #fbbf24, #d97706)" }}>
                    <Settings size={18} /> Portal Settings & Info
                  </button>
                )}
                {canManageUsers && (
                  <button className="btn-white" onClick={() => setPage("manageusers")} style={{ padding: "14px", borderRadius: 14, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(135deg, #38d9f5, #0891b2)" }}>
                    <User size={18} /> Manage Users & Blocklist
                  </button>
                )}
                <button className="btn-danger" onClick={logout} style={{ padding: "14px", borderRadius: 14, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 8 }}>
                  <LogIn size={18} style={{transform:"rotate(180deg)"}} /> Logout Admin
                </button>
              </div>
            </div>
          </div>
        ) :`;

if (c.includes(adminProfileOld)) {
  c = c.replace(adminProfileOld, adminProfileNew);
  console.log('✅ Admin Profile section upgraded successfully!');
} else {
  console.log('⚠️ Admin profile block template adjustment skipped.');
}

fs.writeFileSync(f, c);
console.log('✅ All features applied successfully to App.tsx!');
