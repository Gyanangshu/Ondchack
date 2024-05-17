import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXL_BUETHfIK6bOzYZfq8e__zZNAyHdYc",
  authDomain: "ondc-aim.firebaseapp.com",
  projectId: "ondc-aim",
  storageBucket: "ondc-aim.appspot.com",
  messagingSenderId: "779122493030",
  appId: "1:779122493030:web:8222eeb053020de157cfa7",
  measurementId: "G-R5EJLYEVGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);