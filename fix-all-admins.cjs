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

// 3. Inject Multi-Admin Management UI right at the top of Admin Settings
const targetHeader = '<div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 24 }}>';
const multiAdminCard = `
      {/* 🛡️ All 3 Admins Management Section */}
      <div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 24, border: "2px solid rgba(251,191,36,0.3)" }}>
        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, marginBottom: 16, color: "#fbbf24" }}>🛡️ Manage All 3 Admins Team (Super, User & Complaint Admin)</h3>
        <p style={{ fontSize: 13, color: "var(--ct4)", marginBottom: 16 }}>Teeno admins ki details (Name, Phone, Email, WhatsApp, Instagram, Photo) yahan set karein taaki users unhe dekh sakein aur contact kar sakein.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {["super", "userAdmin", "complaintAdmin"].map((key) => {
            const title = key === "super" ? "👑 Super Admin Details" : key === "userAdmin" ? "🛡️ User Admin Details" : "⚖️ Complaint Admin Details";
            return (
              <div key={key} style={{ background: "var(--cbg5)", borderRadius: 16, padding: "16px", border: "1px solid var(--cbg12)", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontWeight: 700, color: "#fbbf24", fontSize: 15 }}>{title}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
                  <input placeholder="Full Name" value={adminDetails[key]?.name || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], name: e.target.value}})} />
                  <input placeholder="Phone Number" value={adminDetails[key]?.phone || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], phone: e.target.value}})} />
                  <input placeholder="Email Address" value={adminDetails[key]?.email || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], email: e.target.value}})} />
                  <input placeholder="WhatsApp No (10 digits)" value={adminDetails[key]?.whatsapp || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], whatsapp: e.target.value}})} />
                  <input placeholder="Instagram ID" value={adminDetails[key]?.instagram || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], instagram: e.target.value}})} />
                  <input placeholder="Photo URL" value={adminDetails[key]?.photo || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], photo: e.target.value}})} />
                </div>
              </div>
            );
          })}
          <button className="btn-white" onClick={async () => {
            await setDoc(doc(db, "settings", "allAdmins"), adminDetails);
            alert("All 3 Admins details saved successfully!");
          }} style={{ borderRadius: 12, padding: "14px", fontWeight: 700, background: "linear-gradient(135deg, #fbbf24, #d97706)" }}>
            Save All Admins Info 💾
          </button>
        </div>
      </div>
      
      <div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 24 }}>`;

if (!c.includes('Manage All 3 Admins Team')) {
  c = c.replace(targetHeader, multiAdminCard);
  fs.writeFileSync(f, c);
  console.log('✅ Multi-Admin Team Management section successfully added!');
} else {
  console.log('⚠️ Already added.');
}
