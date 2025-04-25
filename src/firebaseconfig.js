// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACIGWmtRZkTp2M5BEv2U3K9zu73ft49_Y",
  authDomain: "esterica-database.firebaseapp.com",
  projectId: "esterica-database",
  storageBucket: "esterica-database.firebasestorage.app",
  messagingSenderId: "1075512553329",
  appId: "1:1075512553329:web:5998b9f633ef9f0f6010d0",
  measurementId: "G-GDB43YHJ52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 