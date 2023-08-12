import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

// THIS NEEDS TO BE UPDATED FROM YOUR FIREBASE CONFIG FROM YOUR FIREBASE CONSOLE.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize database
export const db = getFirestore(app);
