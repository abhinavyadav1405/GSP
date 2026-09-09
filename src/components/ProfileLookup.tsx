import { useState } from "react";
import UserProfile from "./UserProfile";
import { db, doc, getDoc, setDoc } from "../firebase";

interface ProblemLike {
  id: string;
  mobile: string;
  status: string;
}

interface UserDoc {
  firstName: string;
  lastName: string;
  address: string;
  mobile: string;
  photoUrl?: string;
}

interface ProfileLookupProps {
  problems: ProblemLike[];
  theme?: "dark" | "light";
}

const compressImage = (file: File, maxW = 300, quality = 0.5): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = e.target!.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export default function ProfileLookup({ problems, theme = "dark" }: ProfileLookupProps) {
  const [step, setStep] = useState<"enter" | "register" | "view">("enter");
  const [mobileInput, setMobileInput] = useState("");
  const [mobile, setMobile] = useState<string | null>(null);
  const [userDoc, setUserDoc] = useState<UserDoc | null>(null);
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const isDark = theme === "dark";
  const c = {
    text: isDark ? "#eef1f6" : "#050508",
    subtle: isDark ? "#9296ab" : "#5a5f73",
    border: isDark ? "#1c1e2a" : "#e2e5ee",
    chip: isDark ? "#181a26" : "#eef1f6",
    accent: "#5b5ff0",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: 12,
    border: `1px solid ${c.border}`, background: c.chip, color: c.text,
    fontSize: 15, marginBottom: 12, boxSizing: "border-box",
  };

  const checkMobile = async () => {
    const m = mobileInput.trim();
    if (!m) return;
    setLoading(true);
    try {
      const snap = await getDoc(doc(db, "users", m));
      if (snap.exists()) {
        setUserDoc(snap.data() as UserDoc);
        setMobile(m);
        setStep("view");
      } else {
        setMobile(m);
        setStep("register");
      }
    } catch {
      alert("Kuch galat ho gaya, dobara try karein.");
    } finally {
      setLoading(false);
    }
  };

  const handlePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoPreview(await compressImage(file));
  };

  const handleRegister = async () => {
    if (!mobile || !firstName || !lastName || !address) {
      alert("Sab fields bharo.");
      return;
    }
    setLoading(true);
    try {
      const newDoc: UserDoc = { firstName, lastName, address, mobile, photoUrl: photoPreview || undefined };
      await setDoc(doc(db, "users", mobile), newDoc);
      setUserDoc(newDoc);
      setStep("view");
    } catch {
      alert("Save nahi hua, dobara try karein.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep("enter"); setMobile(null); setUserDoc(null); setMobileInput("");
    setFirstName(""); setLastName(""); setAddress(""); setPhotoPreview(null);
  };

  if (step === "enter") {
    return (
      <div className="glass" style={{ borderRadius: 22, padding: "28px 24px", maxWidth: 420, margin: "0 auto", color: c.text }}>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22, marginBottom: 16 }}>My Profile</h2>
        <p style={{ fontSize: 13, color: c.subtle, marginBottom: 12 }}>Apna mobile number daalo:</p>
        <input value={mobileInput} onChange={(e) => setMobileInput(e.target.value)} placeholder="10-digit mobile number" style={inputStyle} />
        <button onClick={checkMobile} disabled={loading} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "none", background: c.accent, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          {loading ? "Checking..." : "Continue"}
        </button>
      </div>
    );
  }

  if (step === "register") {
    return (
      <div className="glass" style={{ borderRadius: 22, padding: "28px 24px", maxWidth: 420, margin: "0 auto", color: c.text }}>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22, marginBottom: 6 }}>Profile Banao</h2>
        <p style={{ fontSize: 13, color: c.subtle, marginBottom: 16 }}>Ye number pehli baar use ho raha hai — apni details bharo.</p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <label style={{ width: 84, height: 84, borderRadius: "50%", background: c.chip, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", cursor: "pointer", border: `1px solid ${c.border}` }}>
            {photoPreview ? <img src={photoPreview} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: 12, color: c.subtle }}>+ Photo</span>}
            <input type="file" accept="image/*" onChange={handlePhoto} style={{ display: "none" }} />
          </label>
        </div>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" style={inputStyle} />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" style={inputStyle} />
        <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" style={inputStyle} />
        <input value={mobile ?? ""} disabled style={{ ...inputStyle, opacity: 0.6 }} />
        <button onClick={handleRegister} disabled={loading} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "none", background: c.accent, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          {loading ? "Saving..." : "Save Profile"}
        </button>
        <div style={{ textAlign: "center", marginTop: 12 }}>
          <button onClick={reset} style={{ background: "none", border: "none", color: c.accent, fontSize: 13, cursor: "pointer" }}>← Change number</button>
        </div>
      </div>
    );
  }

  const mine = problems.filter((p) => p.mobile === mobile);

  return (
    <div>
      <UserProfile
        userId={mobile!}
        name={`${userDoc!.firstName} ${userDoc!.lastName}`}
        address={userDoc!.address}
        contactNo={mobile!}
        photoUrl={userDoc!.photoUrl}
        submittedCount={mine.length}
        solvedCount={mine.filter((p) => p.status === "Resolved").length}
        theme={theme}
      />
      <div style={{ textAlign: "center", marginTop: 14 }}>
        <button onClick={reset} style={{ background: "none", border: "none", color: c.accent, fontSize: 13, cursor: "pointer" }}>← Change number</button>
      </div>
    </div>
  );
}
