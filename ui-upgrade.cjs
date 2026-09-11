const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

// 1. Navbar Upgrade
const navStartStr = '{navLinks.map(l => (';
const navEndStr = 'Admin</button>}';
const navStart = c.indexOf(navStartStr);
const navEnd = c.indexOf(navEndStr, navStart) + navEndStr.length;

if (navStart !== -1) {
  const navReplacement = `{navLinks.map(l => {
          if(l.id === "profile" && isAdmin) return null;
          return (
          <button key={l.id} className="btn-ghost" onClick={() => { if (l.id === "profile" && !currentUser) setPage("login"); else setPage(l.id); }}
            style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, background: page === l.id ? "var(--cbg12)" : "var(--cbg5)", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <UiIcon name={l.icon} size={14} /> {l.label}
          </button>
        )})}
        <button className="btn-white" onClick={() => { if (!currentUser) setPage("login"); else setPage("submit"); }} style={{ borderRadius: 8, padding: "6px 12px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Plus size={14} /> Post Problem
        </button>
        {isAdmin ? (
          <button className="btn-ghost" onClick={() => setPage("profile")} style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, background: page === "profile" ? "var(--cbg12)" : "var(--cbg5)", display: "inline-flex", alignItems: "center", gap: 6, color: "#fbbf24" }}>
            <ShieldAlert size={14} /> Admin Profile
          </button>
        ) : (
          <button className="btn-ghost" onClick={() => setPage("admin")} style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <ShieldAlert size={14} /> Admin Login
          </button>
        )}`;
  c = c.substring(0, navStart) + navReplacement + c.substring(navEnd);
}

// 2. Profile Router Upgrade
const pStart = c.indexOf('{page === "profile" && (');
const fadeEnd = c.indexOf('</FadeIn>', pStart);
if (pStart !== -1 && fadeEnd !== -1) {
  const blockEnd = c.indexOf(')}', fadeEnd) + 2;
  const profReplacement = `{page === "profile" && (
      <FadeIn>
        {isAdmin ? (
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
        ) : currentUser ? (
          <ProfileErrorBoundary>
            <UserProfilePage user={currentUser} problems={problems} onUpdate={updateProblem as any} onDelete={deleteProblem} onLogout={logoutUser} onOpenSettings={() => setPage("user-settings")} />
          </ProfileErrorBoundary>
        ) : (
          <AuthPage onLogin={u => { setCurrentUser(u); setPage("profile"); }} />
        )}
      </FadeIn>
    )}`;
  c = c.substring(0, pStart) + profReplacement + c.substring(blockEnd);
}

// 3. User Profile Emoji Removals
const btnOld1 = '<button className="btn-white" onClick={downloadIdCard} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }}>💳 ID Card</button>';
const btnNew1 = '<button className="btn-white" onClick={downloadIdCard} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}><FileText size={14}/> ID Card</button>';
c = c.replace(btnOld1, btnNew1);

const btnOld2 = '<button className="btn-ghost" onClick={onOpenSettings} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }}>⚙️ Settings</button>';
const btnNew2 = '<button className="btn-ghost" onClick={onOpenSettings} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}><Settings size={14}/> Settings</button>';
c = c.replace(btnOld2, btnNew2);

const btnOld3 = '<button className="btn-danger" onClick={onLogout} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }}>Logout</button>';
const btnNew3 = '<button className="btn-danger" onClick={onLogout} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}><LogIn size={14} style={{transform:"rotate(180deg)"}}/> Logout</button>';
c = c.replace(btnOld3, btnNew3);

const infoOld = '📞 {user.mobile} • 🏠 {user.ward}';
const infoNew = '<Phone size={12} style={{verticalAlign:"middle", marginRight: 4}}/> {user.mobile} <span style={{margin:"0 8px"}}>•</span> <Home size={12} style={{verticalAlign:"middle", marginRight: 4}}/> {user.ward}';
c = c.replace(infoOld, infoNew);

fs.writeFileSync(f, c);
console.log('✅ UI POLISHED! Icons added and Admin Profile Hub created.');
