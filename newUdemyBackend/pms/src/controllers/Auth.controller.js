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
        throw new ApiError(400, "error when registering user")

    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password, username } = req.body

        if ((!username && !email) || !password) {
            throw new ApiError(400, "username or email is required")
        }


        const user = await User.findOne({
            $or: [{ username }, { email }]
        })
        if (!user) {
            throw new ApiError(400, "user does not exist")
        }

        if (!user.isPasswordCorrect(password)) {
            throw new ApiError(400, "password is incorrect")
        }


        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

        const loggedInUser = await User.findById(user._id).select(
            "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
        )

        const options = {
            httpOnly: true,
            secure: true
        }


        return res
            .status(201)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(201, {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                    "User loggedin successfully"
                )
            )
    } catch (error) {
        throw new ApiError(500, error.message || "something went wrong")
    }
}



export {
    registerUser,
    loginUser
}
