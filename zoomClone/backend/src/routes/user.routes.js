import express from 'express';
import { login, register } from '../controllers/user.controller.js';

const router = express.Router();

router.route("/login").post(login)
router.route("/register").post(register)
router.route("/logout")
router.route("/add_to_activity")
router.route("/get_all_activity")

export default router