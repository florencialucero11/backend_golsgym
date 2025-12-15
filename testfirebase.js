import { db } from "./config/firebase.js";
import { collection, getDocs } from "firebase/firestore";

async function testConnection() {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    console.log("Conexión exitosa. Documentos encontrados:", snapshot.size);
  } catch (error) {
    console.error("Error conectando a Firebase:", error);
  }
}

testConnection();
