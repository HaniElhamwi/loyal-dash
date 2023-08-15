import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBp7we1AdmqkWYF_xQUkCnzLGXghnVCvA",
  authDomain: "react-custom-hooks-94520.firebaseapp.com",
  databaseURL: "https://react-custom-hooks-94520-default-rtdb.firebaseio.com",
  projectId: "react-custom-hooks-94520",
  storageBucket: "react-custom-hooks-94520.appspot.com",
  messagingSenderId: "518992708073",
  appId: "1:518992708073:web:409c46eb82eb7418854b78",
  measurementId: "G-NC5RFJ7JTP",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
