import { body } from "express-validator";

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("email is required")
            .isEmail()
            .withMessage("email is required"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("user name is required")
            .isLowercase()
            .withMessage("usermame is must be in lower case")
            .isLength({ min: 3 })
            .withMessage("username must be atleast three characters long"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("password is required")
            .isLength({ min: 3 })
            .withMessage("password must be in 3 chars"),
        body("fullname")
            .optional()
            .trim()
    ]
}

const userLoginValidator = () => {
    return [
        body("email")
            .optional()
            .isEmail()
            .withMessage("Email is invalid"),
        body("password")
            .notEmpty()
            .withMessage("password is required")
    ]

}

const userChangeCurrentPasswordValidator = () => {
    return [
        body("oldPassword")
            .notEmpty()
            .withMessage("old password is required"),
        body("newPassword")
            .notEmpty()
            .withMessage("new password is required")
    ]
}

const userForgotPasswordValidator = () => {
    return [
        body("email")
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid")
    ]
}

const userRestForgotPasswordValidator = () => {
    return [
        body("newPassword")
            .notEmpty()
            .withMessage("New Password is required")
    ]
}
export {
    userRegisterValidator,
    userLoginValidator,
    userChangeCurrentPasswordValidator,
    userForgotPasswordValidator,
    userRestForgotPasswordValidator
}