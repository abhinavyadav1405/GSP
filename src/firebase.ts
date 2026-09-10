import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc, query, orderBy, arrayUnion, arrayRemove } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_FIREBASE_APP_ID,
              measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
              };

              const app = initializeApp(firebaseConfig);
              export const auth = getAuth(app);

              onAuthStateChanged(auth, (user) => {
                if (!user) {
                    signInAnonymously(auth).catch((err) => console.error("Anonymous auth failed:", err));
                      }
                      });

                      export const db = getFirestore(app);
                      export const storage = getStorage(app);

                      export {
                        collection,
                          addDoc,
                            doc,
                              updateDoc,
                                deleteDoc,
                                  onSnapshot,
                                    setDoc,
                                      getDoc,
                                        query,
                                          orderBy,
                                            arrayUnion,
                                              arrayRemove,
                                                ref,
                                                  uploadBytes,
                                                    getDownloadURL
                                                    };