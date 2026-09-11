const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

// 1. Ensure adminDetails state exists
if (!c.includes('adminDetails')) {
  c = c.replace(
    'const [sarpanchAddress, setSarpanchAddress] = useState',
    `const [adminDetails, setAdminDetails] = useState({
      super: { name: "", phone: "", email: "", whatsapp: "", instagram: "", photo: "" },
      userAdmin: { name: "", phone: "", email: "", whatsapp: "", instagram: "", photo: "" },
      complaintAdmin: { name: "", phone: "", email: "", whatsapp: "", instagram: "", photo: "" }
    });\n  const [sarpanchAddress, setSarpanchAddress] = useState`
  );
}

// 2. Ensure Firestore listener for allAdmins exists
if (!c.includes('doc(db, "settings", "allAdmins")')) {
  c = c.replace(
    'useEffect(() => {',
    `useEffect(() => {
      const unsub = onSnapshot(doc(db, "settings", "allAdmins"), (snap) => {
        if (snap.exists()) setAdminDetails(snap.data() as any);
      });
      return () => unsub();
    }, []);\n  useEffect(() => {`
  );
}

// 3. Clean Settings Injection
const target = '{page === "settings" && (';
const cleanSettingsBlock = `{page === "settings" && (
      <FadeIn>
        <div style={{ maxWidth: 650, margin: "0 auto", padding: "30px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <button className="btn-ghost" onClick={() => setPage("profile")} style={{ borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}>
              <span>←</span> Back to Profile
            </button>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, margin: 0 }}>Admin Settings & Team</h2>
          </div>

          {/* 🛡️ All 3 Admins Management */}
          <div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 24, border: "2px solid rgba(251,191,36,0.6)" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, marginBottom: 10, color: "#fbbf24" }}>🛡️ Manage All 3 Admins (Super, User & Complaint Admin)</h3>
            <p style={{ fontSize: 13, color: "var(--ct4)", marginBottom: 16 }}>Teeno admins ki details yahan bharein taaki user profile aur home directory mein unka naam, photo aur contact buttons dikhein.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["super", "userAdmin", "complaintAdmin"].map((key) => {
                const title = key === "super" ? "👑 Super Admin" : key === "userAdmin" ? "🛡️ User Admin" : "⚖️ Complaint Admin";
                return (
                  <div key={key} style={{ background: "var(--cbg5)", borderRadius: 14, padding: "14px", border: "1px solid var(--cbg12)", display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ fontWeight: 700, color: "#fbbf24", fontSize: 14 }}>{title}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 8 }}>
                      <input placeholder="Name" value={adminDetails[key]?.name || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], name: e.target.value}})} />
                      <input placeholder="Phone" value={adminDetails[key]?.phone || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], phone: e.target.value}})} />
                      <input placeholder="Email" value={adminDetails[key]?.email || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], email: e.target.value}})} />
                      <input placeholder="WhatsApp" value={adminDetails[key]?.whatsapp || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], whatsapp: e.target.value}})} />
                      <input placeholder="Instagram" value={adminDetails[key]?.instagram || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], instagram: e.target.value}})} />
                      <input placeholder="Photo URL" value={adminDetails[key]?.photo || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], photo: e.target.value}})} />
                    </div>
                  </div>
                );
              })}
              <button className="btn-white" onClick={async () => {
                await setDoc(doc(db, "settings", "allAdmins"), adminDetails);
                alert("All 3 Admins saved successfully!");
              }} style={{ borderRadius: 12, padding: "14px", fontWeight: 700, background: "linear-gradient(135deg, #fbbf24, #d97706)" }}>
                Save All Admins Info 💾
              </button>
            </div>
          </div>`;

if (c.includes(target) && !c.includes('Manage All 3 Admins')) {
  c = c.replace(target, cleanSettingsBlock);
  fs.writeFileSync(f, c);
  console.log('✅ Clean Final Admin Settings Applied Successfully!');
} else {
  console.log('⚠️ Already applied or target adjusted.');
}
