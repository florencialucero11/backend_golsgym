import jwt from "jsonwebtoken";

export async function loginService(user) {
  // user viene del middleware de auth (firebase auth)
  const payload = {
    uid: user.uid,
    email: user.email,
    role: "user" // hardcodeado para entregar
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET || "secret123",
    { expiresIn: "1h" }
  );

  return token;
}
