import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      ok: false,
      error: "Token no proporcionado"
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guarda uid y email
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      error: "Token inválido"
    });
  }
}
