const fs = require('fs');
const f = 'src/App.tsx';
let c = fs.readFileSync(f, 'utf8');

// 1. Add admin details states and fetch logic if not present
const stateTarget = 'const [sarpanchAddress, setSarpanchAddress] = useState';
const adminStates = `
  const [adminDetails, setAdminDetails] = useState({
    super: { name: "Priyanka Yadav", phone: "", email: "", whatsapp: "", instagram: "", photo: "" },
    userAdmin: { name: "User Admin", phone: "", email: "", whatsapp: "", instagram: "", photo: "" },
    complaintAdmin: { name: "Complaint Admin", phone: "", email: "", whatsapp: "", instagram: "", photo: "" }
  });
`;

if (!c.includes('adminDetails')) {
  c = c.replace(stateTarget, adminStates + '\n  ' + stateTarget);
}

// 2. Add real-time listener for admin details from Firestore
const effectTarget = 'useEffect(() => {\n    const sq = doc(db, "settings", "sarpanch");';
const adminEffect = `
  useEffect(() => {
    const unsubAdmin = onSnapshot(doc(db, "settings", "allAdmins"), (snap) => {
      if (snap.exists()) setAdminDetails(snap.data() as any);
    });
    return () => unsubAdmin();
  }, []);
`;

if (!c.includes('allAdmins')) {
  c = c.replace(effectTarget, adminEffect + '\n' + effectTarget);
}

fs.writeFileSync(f, c);
console.log('✅ Multi-admin state integrated successfully!');
