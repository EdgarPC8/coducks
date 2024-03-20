import { Router } from "express";
import { getUsers } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, getUsers);

export default router;
