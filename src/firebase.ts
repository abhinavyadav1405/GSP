import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, updateDoc, onSnapshot, setDoc, getDoc, query, orderBy } from "firebase/firestore";
import type { User, ConfirmationResult } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2QNUMImsdaijSoE9kkk7_rwcr36REdDM",
  authDomain: "gram-sabha-pahrajpur.firebaseapp.com",
  projectId: "gram-sabha-pahrajpur",
  storageBucket: "gram-sabha-pahrajpur.firebasestorage.app",
  messagingSenderId: "549490337754",
  appId: "1:549490337754:web:8121e99732697383bdc2e3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { RecaptchaVerifier, signInWithPhoneNumber, signOut, onAuthStateChanged };
export { collection, addDoc, doc, updateDoc, onSnapshot, setDoc, getDoc, query, orderBy };
export type { User, ConfirmationResult };
