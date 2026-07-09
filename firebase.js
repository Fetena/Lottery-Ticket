// /firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB4n91truFwn4dDJ56OUa1r8Y4LPbWD1V0",
  authDomain: "lottery-ticket-26691.firebaseapp.com",
  projectId: "lottery-ticket-26691",
  storageBucket: "lottery-ticket-26691.firebasestorage.app",
  messagingSenderId: "186069646271",
  appId: "1:186069646271:web:30717f47fe9d3c351cff0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services and export them for use in your logic.js files
export const db = getFirestore(app);
export const auth = getAuth(app);
