

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Rutas
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/ping", (req, res) => {
  res.json({ ok: true, message: "pong" });
});


// Middlewares globales
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/auth", authRoutes);

app.use("/products", productsRoutes);


// Ruta  (404)
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
