const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

const target = '<h3>Village & Sarpanch Info</h3>';
const multiAdminSettingsUI = `
          {/* All Admins Management Section */}
          <div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, marginBottom: 16 }}>🛡️ Manage All Admins Details (Super, User, Complaint)</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {["super", "userAdmin", "complaintAdmin"].map((roleKey) => {
                const roleTitle = roleKey === "super" ? "Super Admin" : roleKey === "userAdmin" ? "User Admin" : "Complaint Admin";
                return (
                  <div key={roleKey} style={{ borderBottom: "1px solid var(--cbg12)", paddingBottom: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ fontWeight: 700, color: "#fbbf24", fontSize: 15 }}>{roleTitle} Profile</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
                      <input 
                        placeholder="Name" 
                        value={adminDetails[roleKey]?.name || ""} 
                        onChange={e => setAdminDetails({...adminDetails, [roleKey]: {...adminDetails[roleKey], name: e.target.value}})} 
                      />
                      <input 
                        placeholder="Phone Number" 
                        value={adminDetails[roleKey]?.phone || ""} 
                        onChange={e => setAdminDetails({...adminDetails, [roleKey]: {...adminDetails[roleKey], phone: e.target.value}})} 
                      />
                      <input 
                        placeholder="Email" 
                        value={adminDetails[roleKey]?.email || ""} 
                        onChange={e => setAdminDetails({...adminDetails, [roleKey]: {...adminDetails[roleKey], email: e.target.value}})} 
                      />
                      <input 
                        placeholder="WhatsApp Number" 
                        value={adminDetails[roleKey]?.whatsapp || ""} 
                        onChange={e => setAdminDetails({...adminDetails, [roleKey]: {...adminDetails[roleKey], whatsapp: e.target.value}})} 
                      />
                      <input 
                        placeholder="Instagram ID" 
                        value={adminDetails[roleKey]?.instagram || ""} 
                        onChange={e => setAdminDetails({...adminDetails, [roleKey]: {...adminDetails[roleKey], instagram: e.target.value}})} 
                      />
                      <input 
                        placeholder="Photo URL" 
                        value={adminDetails[roleKey]?.photo || ""} 
                        onChange={e => setAdminDetails({...adminDetails, [roleKey]: {...adminDetails[roleKey], photo: e.target.value}})} 
                      />
                    </div>
                  </div>
                );
              })}
              <button className="btn-white" onClick={async () => {
                await setDoc(doc(db, "settings", "allAdmins"), adminDetails);
                alert("All Admins details updated successfully!");
              }} style={{ borderRadius: 12, padding: "12px", fontWeight: 700, background: "linear-gradient(135deg, #fbbf24, #d97706)" }}>
                Save All Admins Info
              </button>
            </div>
          </div>

          <h3>Village & Sarpanch Info</h3>`;

if (c.includes(target) && !c.includes('Manage All Admins Details')) {
  c = c.replace(target, multiAdminSettingsUI);
  fs.writeFileSync(f, c);
  console.log('✅ Multi-admin settings form added successfully!');
} else {
  console.log('⚠️ Target already updated or not found.');
}
