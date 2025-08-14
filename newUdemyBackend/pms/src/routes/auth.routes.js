import { Router } from "express"

import { loginUser, registerUser } from "../controllers/Auth.controller.js"
import { validate } from "../middlewares/validator.middleare.js";
import { userRegisterValidator } from "../validators/index.js"

const router = Router();


router.route("/register").post(
    userRegisterValidator(),
    validate,
    registerUser
);

router.route("/login").post(loginUser)

export default router