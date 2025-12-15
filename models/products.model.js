import { db } from "../config/firebase.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

const productsRef = collection(db, "products");

export async function getAllProducts() {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}

export async function createProduct(data) {
  const newDoc = await addDoc(productsRef, data);
  return { id: newDoc.id, ...data };
}

export async function deleteProductById(id) {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
  return true;
}
