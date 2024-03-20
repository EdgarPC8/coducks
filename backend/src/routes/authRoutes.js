import { Router } from "express";
import { login, verifyAccessToken } from "../controllers/authController.js";

const router = Router();

router.post("/login", login);
router.get("/verifytoken", verifyAccessToken);

export default router;
