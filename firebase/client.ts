// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxxh9dTv2ZoXHk5WPRPjozqBMhFl9MQlI",
  authDomain: "prepwise-aaffd.firebaseapp.com",
  projectId: "prepwise-aaffd",
  storageBucket: "prepwise-aaffd.firebasestorage.app",
  messagingSenderId: "363217880219",
  appId: "1:363217880219:web:55bebe559a90853c1bf23e",
  measurementId: "G-BLSHLQ2BT7"
};

// Initialize Firebase
// const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
// export const db = getFirestore(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);