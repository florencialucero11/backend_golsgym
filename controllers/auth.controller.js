import { auth } from "../config/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Login Firebase
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // 2️⃣ Crear JWT
    const token = jwt.sign(
      {
        uid: user.uid,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 3️⃣ Respuesta OK
    res.json({
      ok: true,
      token
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error.message);

    res.status(400).json({
      ok: false,
      error: "Error en login"
    });
  }
};
