import { User } from "../models/User.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { sendEmail } from "../utils/sendEmial.js";

import { emailCreateForVerifyAccount, forgotPasswordEmail } from "../utils/mail.js"
const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError("", "")
    }

}

const registerUser = async (req, res) => {

    try {
        const { email, username, password, role } = req.body


        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        })
        if (existingUser) {
            throw new ApiError(409, "user with this email or username already exist")
        }
        const user = await User.create({
            email,
            username,
            password,
            isEmailVerified: false,
        })

        if (!user) {
            throw new ApiError(400, "user creataion failed")
        }
        const { unHashedToken, hashedToken, tokenExpiry } = user.generateTempToken()
        user.emailVerificationToken = hashedToken
        user.emailVerificationExpiry = tokenExpiry

        await user.save({ validateBeforeSave: false })

        await sendEmail({
            email: user?.email,
            subject: "please verify your email",
            mailgenContent: emailCreateForVerifyAccount(
                user.username,
                `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`
            )
        })

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
        )
        if (!createdUser) {
            throw new ApiError(400, "something went wrong while registering the user")
        }
        return res
            .status(201)
            .json(new ApiResponse(201, createdUser, "user created Successfully"))

    } catch (error) {
        console.log(error);
        return new ApiError(400, "error when registering user")

    }
}

export { registerUser }
