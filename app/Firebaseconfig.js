// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAimwJ9Htl-LGI9mphTarQ3D2CIuPnjLmw",
  authDomain: "birth-reg.firebaseapp.com",
  projectId: "birth-reg",
  storageBucket: "birth-reg.firebasestorage.app",
  messagingSenderId: "642513464248",
  appId: "1:642513464248:web:9bdd0140d91bcce8c6bd4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;