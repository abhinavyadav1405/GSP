import React, { useState, useEffect } from "react";
import { Home, LayoutDashboard, Plus, Megaphone, User, Landmark, Search, Camera } from "lucide-react";





function ProfilePage({ user, onLogout }) {
  if (!user) return null;
  return (
    <div style={{ background: "rgba(255,255,255,0.7)", padding: 24, borderRadius: 16 }}>
      <h2>👤 User Profile</h2>
      <div style={{ marginTop: 16 }}>
        <p><b>Name:</b> {user.name}</p>
        <p style={{ marginTop: 6 }}><b>Mobile:</b> {user.mobile}</p>
        <p style={{ marginTop: 6 }}><b>Ward:</b> {user.ward}</p>
      </div>
      <button onClick={onLogout} style={{ marginTop: 20, padding: "10px 20px", background: "#f87171", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700 }}>
        Logout
      </button>
    </div>
  );
}

    function SubmitPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div style={{ background: "rgba(255,255,255,0.7)", padding: 24, borderRadius: 16 }}>
      <h2>📝 Report a Problem</h2>
      <input 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Problem Title..." 
        style={{ width: "100%", padding: 12, marginTop: 12, borderRadius: 8, border: "1px solid #ccc", marginBottom: 12 }} 
      />
      <textarea 
        value={desc} 
        onChange={e => setDesc(e.target.value)} 
        placeholder="Describe the issue..." 
        rows={4} 
        style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc", marginBottom: 12 }} 
      />
      <button style={{ width: "100%", padding: 12, background: "#7c5cfc", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700 }}>
        Submit Problem
      </button>
    </div>
  );
}

    function DashboardPage() {
  return (
    <div style={{ background: "rgba(255,255,255,0.7)", padding: 24, borderRadius: 16 }}>
      <h2>📊 Gram Dashboard</h2>
      <p style={{ color: "#555", marginTop: 8 }}>Complaints and problem statistics overview.</p>
    </div>
  );
}

    function SearchPage() {
  const [query, setQuery] = useState("");
  return (
    <div style={{ background: "rgba(255,255,255,0.7)", padding: 24, borderRadius: 16 }}>
      <h2>🔍 Search Portal</h2>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Search users or posts..." 
        style={{ width: "100%", padding: 12, marginTop: 12, borderRadius: 8, border: "1px solid #ccc" }} 
      />
    </div>
  );
}

    function SchemesPage() {
  return (
    <div style={{ background: "rgba(255,255,255,0.7)", padding: 24, borderRadius: 16 }}>
      <h2>🏛 Sarkari Schemes & Yojnaayein</h2>
      <p style={{ color: "#555", marginTop: 8 }}>Gaon ke liye sarkari yojanaon ki jankari aur labh yahan dikhengi.</p>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gsp-user");
      if (saved) setUser(JSON.parse(saved));
    } catch (e) {}
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f0eeff", color: "#1a1040", paddingBottom: 80, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700 }}>Gram Sabha Pahrajpur</h1>
          <button onClick={() => setPage(user ? "profile" : "login")} style={{ padding: "6px 14px", borderRadius: 8, background: "#7c5cfc", color: "#fff", border: "none", cursor: "pointer" }}>
            {user ? user.name : "Login"}
          </button>
        </header>

        {page === "submit" && <SubmitPage />}
        {page === "dashboard" && <DashboardPage />}
        {page === "search" && <SearchPage />}
        {page === "schemes" && <SchemesPage />}
        {page === "home" && (
          <div style={{ background: "rgba(255,255,255,0.7)", padding: 24, borderRadius: 16, textAlign: "center" }}>
            <h2>Welcome to Digital Portal</h2>
            <p style={{ color: "#555", marginTop: 8 }}>Gram Sabha Pahrajpur, Ballia, UP</p>
          </div>
        )}

        {page === "login" && (
          <div style={{ background: "rgba(255,255,255,0.7)", padding: 24, borderRadius: 16, maxWidth: 400, margin: "0 auto" }}>
            <h3>Login / Register</h3>
            <input placeholder="Mobile Number" style={{ width: "100%", padding: 10, marginTop: 12, borderRadius: 8, border: "1px solid #ccc" }} />
            <button onClick={() => { setUser({ name: "Aapka Naam", mobile: "9876543210", ward: "Ward 1" }); localStorage.setItem("gsp-user", JSON.stringify({ name: "Aapka Naam", mobile: "9876543210", ward: "Ward 1" })); setPage("home"); }} style={{ width: "100%", padding: 12, marginTop: 14, background: "#7c5cfc", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
              Continue
            </button>
          </div>
        )}

        {page === "profile" && user && <ProfilePage user={user} onLogout={() => { localStorage.removeItem("gsp-user"); setUser(null); setPage("home"); }} />}
        {/* Old profile block ignored */ false && (
          <div style={{ background: "rgba(255,255,255,0.7)", padding: 24, borderRadius: 16 }}>
            <h3>{user.name}</h3>
            <p>Mobile: {user.mobile}</p>
            <p>Ward: {user.ward}</p>
            <button onClick={() => { localStorage.removeItem("gsp-user"); setUser(null); setPage("home"); }} style={{ marginTop: 14, padding: "8px 16px", background: "#f87171", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
              Logout
            </button>
          </div>
        )}
      </div>

      <nav style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 68, background: "rgba(255,255,255,0.95)", display: "flex", justifyContent: "space-around", alignItems: "center", borderTop: "1px solid rgba(0,0,0,0.08)", zIndex: 999 }}>
        <button onClick={() => setPage("home")} style={{ background: "none", border: "none", cursor: "pointer" }}><Home size={24} /></button>
        <button onClick={() => setPage("dashboard")} style={{ background: "none", border: "none", cursor: "pointer" }}><LayoutDashboard size={24} /></button>
        <button onClick={() => setPage("submit")} style={{ width: 48, height: 48, borderRadius: "50%", background: "#111", color: "#fff", border: "none", display: "grid", placeItems: "center", cursor: "pointer" }}><Plus size={26} /></button>
        <button onClick={() => setPage("schemes")} style={{ background: "none", border: "none", cursor: "pointer" }}><Landmark size={24} /></button>
        <button onClick={() => setPage(user ? "profile" : "login")} style={{ background: "none", border: "none", cursor: "pointer" }}><User size={24} /></button>
      </nav>
    </div>
  );
}
