import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from "../controllers/products.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/role.middleware.js";

const router = Router();

// público (frontend puede leer)
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// admin
router.post("/", authMiddleware, isAdmin, createProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

export default router;

