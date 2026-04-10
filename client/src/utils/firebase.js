
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-ai-c10e3.firebaseapp.com",
  projectId: "interview-ai-c10e3",
  storageBucket: "interview-ai-c10e3.firebasestorage.app",
  messagingSenderId: "430456350351",
  appId: "1:430456350351:web:aa9fe70fbf44170d0632fa",
  measurementId: "G-RZRS6J8B7E"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}