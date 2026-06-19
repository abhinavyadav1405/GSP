import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc, query, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import type { User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2QNUMImsdaijSoE9kkk7_rwcr36REdDM",
  authDomain: "gram-sabha-pahrajpur.firebaseapp.com",
  projectId: "gram-sabha-pahrajpur",
  storageBucket: "gram-sabha-pahrajpur.firebasestorage.app",
  messagingSenderId: "549490337754",
  appId: "1:549490337754:web:8121e99732697383bdc2e3",
  measurementId: "G-8EWVJP3L9V"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification };
export { collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc, query, orderBy };
export { ref, uploadBytes, getDownloadURL };
export type { User };
export { sendPasswordResetEmail } from "firebase/auth";
