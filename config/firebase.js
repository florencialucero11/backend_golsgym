import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyAd9NCFx9yHOxM1a-skRwvTjtQrZ7xBaKU",
  authDomain: "node-products-api.firebaseapp.com",
  projectId: "node-products-api",
  storageBucket: "node-products-api.firebasestorage.app",
  messagingSenderId: "1088995572034",
  appId: "1:1088995572034:web:0529423317b1533f73f0db",
  measurementId: "G-VBX5BRG4M4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
