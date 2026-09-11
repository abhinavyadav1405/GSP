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

// 3. Inject right above "Change Super Admin Password" in settings page
const target = 'Change Super Admin Password';
const multiAdminCard = `
              {/* 🛡️ All 3 Admins Management Section */}
              <div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 24, border: "2px solid rgba(251,191,36,0.5)" }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, marginBottom: 12, color: "#fbbf24" }}>🛡️ Manage All 3 Admins (Super, User & Complaint Admin)</h3>
                <p style={{ fontSize: 13, color: "var(--ct4)", marginBottom: 16 }}>Teeno admins ki details yahan set karein taaki user profile aur home directory mein unka naam, photo aur contact buttons dikhein.</p>
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
              </div>

              Change Super Admin Password`;

if (c.includes(target) && !c.includes('Manage All 3 Admins')) {
  c = c.replace(target, multiAdminCard);
  fs.writeFileSync(f, c);
  console.log('✅ 3-Admin section successfully injected into settings!');
} else {
  console.log('⚠️ Target already updated or not found.');
}
