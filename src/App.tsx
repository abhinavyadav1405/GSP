import React, { useState, useEffect } from "react";
import { Home, LayoutDashboard, Plus, Megaphone, User, Landmark, Search, Camera, Bell, CheckCheck, ArrowLeft } from "lucide-react";
import { db, collection, doc, onSnapshot, query, updateDoc, where } from "./firebase";
type NotificationItem = {
  id: string;
  title?: string;
  message?: string;
  body?: string;
  read?: boolean;
  createdAt?: any;
};

function formatNotificationDate(value: any) {
  if (!value) return "Just now";
  const date = typeof value.toDate === "function" ? value.toDate() : new Date(value);
  return Number.isNaN(date.getTime()) ? "Just now" : date.toLocaleString("en-IN");
}

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
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const unreadCount = notifications.filter((item) => !item.read).length;

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gsp-user");
      if (saved) setUser(JSON.parse(saved));
    } catch (e) {}
  }, []);

  // Notifications are scoped to the signed-in profile's mobile number.
  // Documents are created by trusted complaint/status-update logic in Firestore.
  useEffect(() => {
    if (!user?.mobile) {
      setNotifications([]);
      return;
    }

    const notificationsQuery = query(
      collection(db, "notifications"),
      where("recipientMobile", "==", user.mobile)
    );

    return onSnapshot(
      notificationsQuery,
      (snapshot) => {
        const items = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        })) as NotificationItem[];
        items.sort((left, right) => {
          const leftTime = left.createdAt?.toMillis?.() ?? 0;
          const rightTime = right.createdAt?.toMillis?.() ?? 0;
          return rightTime - leftTime;
        });
        setNotifications(items);
      },
      (error) => {
        console.error("Could not load GSP notifications:", error);
      }
    );
  }, [user?.mobile]);

  const markNotificationRead = async (item: NotificationItem) => {
    if (item.read) return;
    try {
      await updateDoc(doc(db, "notifications", item.id), { read: true });
    } catch (error) {
      console.error("Could not mark notification as read:", error);
    }
  };

  const markAllNotificationsRead = async () => {
    try {
      await Promise.all(
        notifications
          .filter((item) => !item.read)
          .map((item) => updateDoc(doc(db, "notifications", item.id), { read: true }))
      );
    } catch (error) {
      console.error("Could not mark all notifications as read:", error);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0eeff", color: "#1a1040", paddingBottom: 80, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700 }}>Gram Sabha Pahrajpur</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {user && (
              <button
                onClick={() => setPage("notifications")}
                aria-label={`Notifications, ${unreadCount} unread`}
                title="Notifications"
                style={{ position: "relative", display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: 10, background: "#fff", color: "#1a1040", border: "1px solid #ddd6fe", cursor: "pointer" }}
              >
                <Bell size={20} />
                {unreadCount > 0 && <span style={{ position: "absolute", top: -5, right: -5, minWidth: 18, height: 18, padding: "0 4px", borderRadius: 999, background: "#ef4444", color: "#fff", fontSize: 11, fontWeight: 700, display: "grid", placeItems: "center" }}>{unreadCount > 99 ? "99+" : unreadCount}</span>}
              </button>
            )}
            <button onClick={() => setPage(user ? "profile" : "login")} style={{ padding: "6px 14px", borderRadius: 8, background: "#7c5cfc", color: "#fff", border: "none", cursor: "pointer" }}>
              {user ? user.name : "Login"}
            </button>
          </div>
        </header>

        {page === "submit" && <SubmitPage />}
        {page === "dashboard" && <DashboardPage />}
        {page === "notifications" && (
          <section style={{ background: "rgba(255,255,255,0.82)", padding: 20, borderRadius: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => setPage("home")} aria-label="Back to home" style={{ display: "grid", placeItems: "center", width: 36, height: 36, borderRadius: 9, background: "#f3f0ff", border: "1px solid #ddd6fe", cursor: "pointer" }}><ArrowLeft size={18} /></button>
                <div>
                  <h2 style={{ margin: 0 }}>Notifications</h2>
                  <p style={{ color: "#666", fontSize: 13, marginTop: 4 }}>{unreadCount} unread</p>
                </div>
              </div>
              {unreadCount > 0 && <button onClick={markAllNotificationsRead} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 10px", borderRadius: 8, background: "#ede9fe", color: "#5b21b6", border: "none", cursor: "pointer", fontWeight: 600, fontSize: 12 }}><CheckCheck size={15} /> Mark all read</button>}
            </div>
            {!user && <p>Please log in to view your notifications.</p>}
            {user && notifications.length === 0 && (
              <div style={{ textAlign: "center", padding: "34px 12px", color: "#666" }}>
                <Bell size={32} style={{ margin: "0 auto 10px", color: "#8b7be8" }} />
                <h3 style={{ color: "#1a1040", marginBottom: 6 }}>You are all caught up</h3>
                <p style={{ fontSize: 14 }}>Complaint updates and village announcements will appear here.</p>
              </div>
            )}
            <div style={{ display: "grid", gap: 10 }}>
              {notifications.map((item) => (
                <button key={item.id} onClick={() => markNotificationRead(item)} style={{ display: "block", width: "100%", textAlign: "left", padding: 14, borderRadius: 12, border: item.read ? "1px solid #e5e7eb" : "1px solid #c4b5fd", background: item.read ? "#fff" : "#f5f3ff", cursor: item.read ? "default" : "pointer", color: "#1a1040" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
                    <strong>{item.title || "GSP Notification"}</strong>
                    {!item.read && <span style={{ width: 8, height: 8, flex: "0 0 8px", borderRadius: "50%", background: "#7c5cfc", marginTop: 5 }} />}
                  </div>
                  <p style={{ marginTop: 7, color: "#4b5563", fontSize: 14, lineHeight: 1.5 }}>{item.message || item.body || "You have a new update from Gram Sabha Pahrajpur."}</p>
                  <p style={{ marginTop: 8, color: "#7c739a", fontSize: 11 }}>{formatNotificationDate(item.createdAt)}</p>
                </button>
              ))}
            </div>
          </section>
        )}
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
