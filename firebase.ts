import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFqq1QwMWtNgRP6fQc4G-UCqVLJ3ORvDU",
  authDomain: "mahrouseh-41c59.firebaseapp.com",
  projectId: "mahrouseh-41c59",
  storageBucket: "mahrouseh-41c59.appspot.com",
  messagingSenderId: "789756452595",
  appId: "1:789756452595:web:076a88d346a4bc66482186",
  measurementId: "G-Q4QMRLFHB3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
