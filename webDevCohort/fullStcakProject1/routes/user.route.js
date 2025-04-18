import express from "express";
import { login, register, verifyUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register)
router.get("/verify/:verifyToken", verifyUser)
router.post("/login", login)

export default router