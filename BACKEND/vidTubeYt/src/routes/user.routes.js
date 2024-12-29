import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "..//middlewares/auth.middlewares.js";

const router = Router();

// register user
router.route("/register").post(
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "avatar", maxCount: 1 },
  ]),
  registerUser
);
// login user
router.route("/login").post(loginUser);

// logout user
router.route("/logout").post(verifyJWT, logoutUser);
export default router;
