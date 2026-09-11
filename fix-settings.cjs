const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

if (!c.includes('function UserSettingsPage')) {
  const target = 'export default function App()';
  const component = `
function UserSettingsPage({ user, onSave, onBack }: { user: any; onSave: (u: any) => Promise<void>; onBack: () => void }) {
  const [name, setName] = useState(user.name || "");
  const [ward, setWard] = useState(user.ward || "Other");
  const [avatar, setAvatar] = useState(user.avatar || "");
  const [loading, setLoading] = useState(false);

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "40px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button className="btn-ghost" onClick={onBack} style={{ borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}>
          <span>←</span> Back
        </button>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, margin: 0 }}>Profile Settings</h2>
      </div>
      <div className="glass" style={{ borderRadius: 20, padding: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#7c5cfc,#38d9f5)", overflow: "hidden", display: "grid", placeItems: "center", color: "#fff", fontSize: 24, fontWeight: 800 }}>
              {avatar ? <img src={avatar} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (name || "U").slice(0,1).toUpperCase()}
            </div>
            <label style={{ cursor: "pointer", background: "var(--btn-ghost-bg)", border: "1px solid var(--btn-ghost-border)", padding: "10px 16px", borderRadius: 12, fontSize: 13, fontWeight: 600, color: "var(--text-main)" }}>
              📷 Change Photo
              <input type="file" accept="image/*" onChange={handlePhoto} style={{ display: "none" }} />
            </label>
            {avatar && (
              <button onClick={() => setAvatar("")} style={{ background: "none", border: "none", color: "#f87171", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Remove</button>
            )}
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 6, display: "block" }}>Full Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 6, display: "block" }}>Ward / Location</label>
            <select value={ward} onChange={e => setWard(e.target.value)}>
              {["Chhatarsar", "Pahrajpur", "Chakjalal", "Chakmoti", "Chakjiya", "Other"].map(w => <option key={w}>{w}</option>)}
            </select>
          </div>
          <button className="btn-white" disabled={loading} onClick={async () => { 
            setLoading(true); 
            await onSave({...user, name, ward, avatar}); 
            setLoading(false); 
            onBack(); 
          }} style={{ borderRadius: 12, padding: "14px", marginTop: 10, fontSize: 15, fontWeight: 700 }}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
`;
  c = c.replace(target, component + '\n\n' + target);
  fs.writeFileSync(f, c);
  console.log('✅ User Settings Page Added!');
} else {
  console.log('⚠️ Settings page already exists.');
}
