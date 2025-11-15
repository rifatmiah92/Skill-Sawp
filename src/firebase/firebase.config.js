// src/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfcekTdrf4wCbxzUW72-4dA6llEc7RRCI",
  authDomain: "email-password-auth-be779.firebaseapp.com",
  projectId: "email-password-auth-be779",
  storageBucket: "email-password-auth-be779.appspot.com",
  messagingSenderId: "494274725349",
  appId: "1:494274725349:web:6378dc3990f0e0c7e79b0c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
