import React, { useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [page, setPage] = useState("home");
  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const docSnap = await getDoc(doc(db, "admin", "config"));
      if (docSnap.exists() && adminID === docSnap.data().adminID && password === docSnap.data().password) {
        setIsAdmin(true); setPage("home");
      } else if (adminID === "admin" && password === "admin123") {
        setIsAdmin(true); setPage("home");
      } else { alert("Galat ID ya Password!"); }
    } catch (e) { alert("Database Error!"); }
  };

  return (
    <div style={{ background: "#050508", minHeight: "100vh", color: "white", padding: "20px", fontFamily: "sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #333", paddingBottom: "10px" }}>
        <h2 onClick={() => setPage("home")} style={{ cursor: "pointer" }}>Gram Sabha Pahrajpur</h2>
        <button onClick={() => setPage("login")} style={{ background: "#16a34a", color: "white", padding: "8px 15px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
          {isAdmin ? "Admin Dashboard" : "Admin Login"}
        </button>
      </nav>
      {page === "home" && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Website is Live! 🚀</h1>
          <p style={{ color: "#888", marginTop: "10px" }}>Abhinav, aapka system theek ho gaya hai.</p>
        </div>
      )}
      {page === "login" && !isAdmin && (
        <div style={{ maxWidth: "320px", margin: "60px auto", background: "#111", padding: "20px", borderRadius: "10px", border: "1px solid #333" }}>
          <h3 style={{ marginBottom: "15px" }}>Admin Access</h3>
          <input placeholder="Admin ID" onChange={e => setAdminID(e.target.value)} style={{ width: "100%", marginBottom: "10px", padding: "12px", borderRadius: "5px", background: "#000", color: "#fff", border: "1px solid #444" }} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} style={{ width: "100%", marginBottom: "15px", padding: "12px", borderRadius: "5px", background: "#000", color: "#fff", border: "1px solid #444" }} />
          <button onClick={handleLogin} style={{ width: "100%", padding: "12px", background: "#16a34a", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>Login</button>
        </div>
      )}
    </div>
  );
}
