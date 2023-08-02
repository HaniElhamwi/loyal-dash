import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMdRJgRt6jgumIE6zv1bPMU90wQupNM4Y",
  authDomain: "test-791e4.firebaseapp.com",
  projectId: "test-791e4",
  storageBucket: "test-791e4.appspot.com",
  messagingSenderId: "819831905619",
  appId: "1:819831905619:web:c5a6e32dfef6b80c6995a6",
  measurementId: "G-04P34GVGEF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
