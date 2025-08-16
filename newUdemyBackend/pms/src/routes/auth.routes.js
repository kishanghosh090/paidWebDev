import { Router } from "express"

import { changePassword, forgotPasswordRequest, getCurrentUser, loginUser, logoutUser, refreshAccessToken, registerUser, resendEmailVerification, restForgotPassword, verifyEmail } from "../controllers/Auth.controller.js"
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator, userLoginValidator, userRestForgotPasswordValidator, userChangeCurrentPasswordValidator } from "../validators/index.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router();


router.route("/register").post(
    userRegisterValidator(),
    validate,
    registerUser
);

router.route("/login").post(
    userLoginValidator(),
    validate,
    loginUser
)
router.route("/verify-email/:verificationToken").get(
    verifyEmail
)

router.route("/refresh-token").post(
    refreshAccessToken
)

router.route("/forgotpassword").get(
    userLoginValidator(),
    validate,
    forgotPasswordRequest
)

router.route("/resetPassword/:resetToken").post(
    userRestForgotPasswordValidator(),
    validate,
    restForgotPassword
)





// secured routes
router.route("/logout").post(
    verifyJWT,
    logoutUser
)
router.route("/currentUser").post(
    verifyJWT,
    getCurrentUser
)
router.route("/changePassword").post(
    verifyJWT,
    userChangeCurrentPasswordValidator(),
    validate,
    changePassword
)
router.route("/resendEmailVerification").post(
    verifyJWT,
    resendEmailVerification
)
export default router