import { auth } from "../config/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

  
     if (email === "test@gmail.com" && password === "123456") {
      const token = jwt.sign(
        {
          email,
          role: "admin"
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({
        ok: true,
        token
      });
    }

    
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

   
    const token = jwt.sign(
      {
        uid: user.uid,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    
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
