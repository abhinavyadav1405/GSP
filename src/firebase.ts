import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithCustomToken, signOut } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc, query, orderBy, arrayUnion, arrayRemove } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

// Public Firebase web-app configuration for the GSP staging project.
// These values are intentionally client-side; access is controlled by Firebase Auth and Security Rules.
const firebaseConfig = {
  apiKey: "AIzaSyCsnsxqLGvQlFuJuI1KlCW5h-agWMETRbU",
  authDomain: "gsp-staging-cf7e9.firebaseapp.com",
  projectId: "gsp-staging-cf7e9",
  storageBucket: "gsp-staging-cf7e9.firebasestorage.app",
  messagingSenderId: "648226456259",
  appId: "1:648226456259:web:37945ea1901ed6c4131876",
  measurementId: "G-80D659M2NH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const functions = getFunctions(app, "us-central1");

export const db = getFirestore(app);
export const storage = getStorage(app);

export {
  collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc,
  query, orderBy, arrayUnion, arrayRemove, ref, uploadBytes, getDownloadURL,
  deleteObject, signInWithCustomToken, signOut, httpsCallable, onAuthStateChanged,
};
