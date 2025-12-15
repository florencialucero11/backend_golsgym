console.log("🔥 role.middleware cargado");

import { db } from "../config/firebase.js";
import { doc, getDoc } from "firebase/firestore";

console.log("🔥 getDoc es:", getDoc);

export async function isAdmin(req, res, next) {
  try {
    const uid = req.user.uid;

    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return res.status(403).json({
        ok: false,
        error: "Usuario no encontrado"
      });
    }

    const userData = userSnap.data();

    if (userData.role !== "admin") {
      return res.status(403).json({
        ok: false,
        error: "Acceso solo para administradores"
      });
    }

    next();
  } catch (error) {
    console.error("ROLE MIDDLEWARE ERROR:", error);
    return res.status(500).json({
      ok: false,
      error: "Error validando rol"
    });
  }
}
