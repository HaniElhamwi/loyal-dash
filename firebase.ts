import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZ1JdBGS1AhanvdOKZhEv2Um8pR5aGuL0",
  authDomain: "loyal-app-5323a.firebaseapp.com",
  projectId: "loyal-app-5323a",
  storageBucket: "loyal-app-5323a.appspot.com",
  messagingSenderId: "674995512224",
  appId: "1:674995512224:web:240481968a219c4e4e7ac5",
  measurementId: "G-YY621MBY5W",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
