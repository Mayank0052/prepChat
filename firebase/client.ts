import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb9QMvyfv-pzFPHjml0huFMYSs9Ff1OYo",
  authDomain: "prepchat-cf356.firebaseapp.com",
  projectId: "prepchat-cf356",
  storageBucket: "prepchat-cf356.firebasestorage.app",
  messagingSenderId: "683603316186",
  appId: "1:683603316186:web:27d6f89f4b1ff2f6f444e3",
  measurementId: "G-MQNGJTLDKC"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);