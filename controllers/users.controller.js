import { db } from "../firebase.js";

export const getAllUsers = async (req, res) => {
  try {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return res.json({
      ok: true,
      users
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      error: "Error al obtener los usuarios"
    });
  }
};
