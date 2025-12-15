import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import isAdmin from "../middlewares/isAdmin.js";
import { getAllUsers } from "../controllers/users.controller.js";

const router = Router();

router.get("/", authMiddleware, isAdmin, getAllUsers);

export default router;
