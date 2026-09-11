const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

// 1. Check if Admin Directory & Settings UI is already added
if (!c.includes('Admin Panchayat Team')) {
  const targetSearch = '{/* Sarpanch Profile + Social */}';
  const adminUiSection = `
            {/* Panchayat Admins Directory for Users */}
            <div style={{ marginTop: 40 }}>
              <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:18, marginBottom:14, color:"var(--text-main)" }}>🛡️ Panchayat Admins & Team</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                {Object.entries(adminDetails || {}).map(([key, adm]: [string, any]) => {
                  if (!adm || !adm.name) return null;
                  const roleTitle = key === "super" ? "Super Admin" : key === "userAdmin" ? "User Admin" : "Complaint Admin";
                  return (
                    <div key={key} className="glass" style={{ borderRadius: 18, padding: "18px", display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 50, height: 50, borderRadius: "50%", background: "linear-gradient(135deg,#fbbf24,#d97706)", display: "grid", placeItems: "center", color: "#fff", fontWeight: 700, fontSize: 20, overflow: "hidden", flexShrink: 0 }}>
                          {adm.photo ? <img src={adm.photo} style={{width:"100%", height:"100%", objectFit:"cover"}} /> : adm.name.slice(0,1).toUpperCase()}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#fbbf24" }}>{roleTitle}</div>
                          <div style={{ fontSize: 15, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{adm.name}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 12, color: "var(--ct4)", display: "flex", flexDirection: "column", gap: 4 }}>
                        {adm.phone && <div>📞 {adm.phone}</div>}
                        {adm.email && <div>✉️ {adm.email}</div>}
                      </div>
                      <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                        {adm.whatsapp && (
                          <a href={\`https://wa.me/91\${adm.whatsapp.replace(/\\D/g,"")}\`} target="_blank" rel="noreferrer" style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(37,211,102,0.15)", color: "#25d366", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                            WhatsApp
                          </a>
                        )}
                        {adm.phone && (
                          <a href={\`tel:\${adm.phone}\`} style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(59,130,246,0.15)", color: "#3b82f6", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                            Call
                          </a>
                        )}
                        {adm.instagram && (
                          <a href={\`https://instagram.com/\${adm.instagram.replace("@","")}\`} target="_blank" rel="noreferrer" style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(225,48,108,0.15)", color: "#e1306c", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Sarpanch Profile + Social */}`;

  if (c.includes(targetSearch)) {
    c = c.replace(targetSearch, adminUiSection);
    fs.writeFileSync(f, c);
    console.log('✅ Admin Directory Section added to Home page!');
  }
}
