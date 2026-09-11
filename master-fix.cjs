const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

const upIdx = c.indexOf('function UserProfilePage(');
const endIdx = c.indexOf('// ── Admin Login', upIdx);

if (upIdx !== -1 && endIdx !== -1) {
  const dlStart = c.indexOf('const downloadIdCard = () => {', upIdx);
  let dlEnd = c.indexOf('  return (', dlStart);
  if (dlEnd === -1) dlEnd = c.indexOf('return (', dlStart);
  
  let dlCode = '';
  if (dlStart !== -1 && dlEnd !== -1 && dlStart < endIdx) {
    dlCode = c.substring(dlStart, dlEnd);
  }

  const newCode = `function UserProfilePage({ user, problems, onUpdate, onDelete, onLogout, onOpenSettings }: { user: AppUser; problems: Problem[]; onUpdate: (id: string, changes: any) => Promise<void>; onDelete: (id: string) => Promise<void>; onLogout: () => void; onOpenSettings: () => void }) {
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCat, setFilterCat] = useState("All");
  const [filterWard, setFilterWard] = useState("All");

  const mine = problems.filter(p => p.authorId === user.id || (p.mobile === user.mobile && p.name === user.name));

  ${dlCode}
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 0" }}>
      <div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 20, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", background: "linear-gradient(135deg,#7c5cfc,#38d9f5)", display: "grid", placeItems: "center", fontSize: 28, color: "#fff", fontWeight: 800 }}>
          {user.avatar ? <img src={user.avatar} style={{width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover"}} alt="Avatar" /> : (user.name || "U").slice(0,1).toUpperCase()}
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 24, margin: "0 0 5px", fontFamily: "'Space Grotesk',sans-serif" }}>{user.name}</h2>
          <div style={{ color: "var(--ct4)", fontSize: 14 }}>📞 {user.mobile} • 🏠 {user.ward}</div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn-white" onClick={downloadIdCard} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }}>💳 ID Card</button>
          <button className="btn-ghost" onClick={onOpenSettings} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }}>⚙️ Settings</button>
          <button className="btn-danger" onClick={onLogout} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }}>Logout</button>
        </div>
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, marginBottom: 14 }}>My Submitted Issues</h3>
      <div className="glass" style={{ borderRadius: 16, padding: "16px 20px", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title or ID…" style={{ flex: "1 1 180px", minWidth: 140 }} />
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ flex: "1 1 120px", minWidth: 100 }}>
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{ flex: "1 1 120px", minWidth: 100 }}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="priority">By Priority</option>
          </select>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {mine.length === 0 ? <div style={{ textAlign: "center", color: "var(--ct4)", padding: 30 }}>No issues found.</div> : mine.map(p => (
          <ProblemCard key={p.id} problem={p} isAdmin={false} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

`;
  c = c.substring(0, upIdx) + newCode + c.substring(endIdx);
  fs.writeFileSync(f, c);
  console.log('✅ MASTER FIX APPLIED! Ab Vercel par push karo.');
} else {
  console.log('⚠️ File structure problem.');
}
