import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  getUserProfile,
  getWatchHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateAvatar,
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
router.route("/refresh-token").post(refreshAccessToken);
router.route("/changePassword").post(verifyJWT, changeCurrentPassword);
router.route("/get-current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateAvatar);

router.route("/channel/:username").get(verifyJWT, getUserProfile);

router.route("/history").get(verifyJWT, getWatchHistory);
export default router;
