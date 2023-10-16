// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-92c6c.firebaseapp.com",
  projectId: "mern-auth-92c6c",
  storageBucket: "mern-auth-92c6c.appspot.com",
  messagingSenderId: "196880860526",
  appId: "1:196880860526:web:6ed29eb19d7167a6952d7f"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);