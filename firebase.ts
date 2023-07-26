import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUF6vSWVrp2sWyqCCBGY8WrcJMjqelCuI",
  authDomain: "admin-page-21c0d.firebaseapp.com",
  projectId: "admin-page-21c0d",
  storageBucket: "admin-page-21c0d.appspot.com",
  messagingSenderId: "467187496384",
  appId: "1:467187496384:web:946ff5bd86bb9f54a90425",
  measurementId: "G-KMEZHZ0PS9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
