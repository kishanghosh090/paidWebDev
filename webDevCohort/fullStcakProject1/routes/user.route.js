import express from "express";
import { getMe, login, register, verifyUser } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register)
router.get("/verify/:verifyToken", verifyUser)
router.post("/login", login)
router.get("/getMe", isLoggedIn, getMe)

export default router