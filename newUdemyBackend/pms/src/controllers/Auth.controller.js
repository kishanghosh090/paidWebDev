import { User } from "../models/User.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { sendEmail } from "../utils/sendEmial.js";
import crypto from "crypto"
import { emailCreateForVerifyAccount, forgotPasswordEmail } from "../utils/mail.js";
import jwt from "jsonwebtoken";



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

const logoutUser = async (req, res) => {
    try {
        const userId = req?.user._id
        if (!userId) {
            throw new ApiError(401, "unauthorized user")
        }
        await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    refreshToken: ""
                }
            }, {
            new: true
        }
        )

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .status(201)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(
                new ApiResponse(201, {}, "user logged out")
            )

    } catch (error) {

    }
}

const getCurrentUser = async (req, res) => {
    try {
        return res
            .status(200)
            .json(
                new ApiResponse(200, req?.user || undefined, "user fetched successfully")
            );
    } catch (error) {
        throw new ApiError(500, error.message || "something went wrong in get user");
    }
}

const verifyEmail = async (req, res) => {
    try {
        const { verificationToken } = req.params
        if (!verificationToken) {
            throw new ApiError(400, "Email verification token is missing")
        }

        let hashedToken = crypto
            .createHash("sha256")
            .update(verificationToken)
            .digest("hex")


        const user = await User.findOne({
            emailVerificationToken: hashedToken,
            emailVerificationExpiry: {
                $gt: Date.now()
            }
        })

        if (!user) {
            throw new ApiError(400, "Token is invalid or expired")
        }

        user.emailVerificationToken = undefined
        user.emailVerificationExpiry = undefined

        user.isEmailVerified = true
        await user.save({ validateBeforeSave: false })

        return res
            .status(200)
            .json(
                new ApiResponse(200, {
                    isEmailVerified: true
                }, "Email verified successfully")
            )


    } catch (error) {

    }

}

const resendEmailVerification = async (req, res) => {
    try {
        const user = await User.findById(req?.user?._id)

        if (!user) {
            throw new ApiError(404, "User does not exist")
        }

        if (user.isEmailVerified) {
            throw new ApiError(409, "Email already verified")
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
        return res
            .status(200)
            .json(
                new ApiResponse(200, {}, "Mail has beed sent to your Email")
            )


    } catch (error) {
        throw new ApiError(500, error?.message || "something went wrong when sending verification token")
    }
}

const refreshAccessToken = async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized access")
    }
    try {
        const decodedToken = await jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id)
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }

        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired")
        }

        const options = {
            httpOnly: true,
            secure: true
        }

        const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshToken(user?._id)

        user.refreshToken = newRefreshToken
        await user.save()

        return res
            .status(200)
            .cookie("accessToken", options)
            .cookie("refreshToken", options)
            .json(
                new ApiResponse(
                    200,
                    {
                        accessToken,
                        refreshToken: newRefreshToken
                    },
                    "Refresh Token refreshed"
                )
            )


    } catch (error) {
        throw new ApiError(400, error.message)
    }
}

// it is a request sent via email
const forgotPasswordRequest = async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            throw new ApiError(404, "user does not exists")
        }

        const { unHashedToken, hashedToken, tokenExpiry } = await user.generateTempToken()

        user.forgotPasswordToken = hashedToken
        user.forgotPasswordExpiry = tokenExpiry

        await user.save({ validateBeforeSave: false })

        await sendEmail({
            email: user?.email,
            subject: "Fogot password",
            mailgenContent: forgotPasswordEmail(
                user.username,
                `${process.env.FORGOT_PASSWORD_REDIRECT_URL}/${unHashedToken}`
            )
        })

        return res
            .status(201)
            .json(
                new ApiResponse(200, {}, "password rest mail has been sent to your Email")
            )
    } catch (error) {
        throw new ApiError(400, "something went worong")
    }

}

// rest forgot password

const restForgotPassword = async (req, res) => { }

export {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    verifyEmail,
    resendEmailVerification,
    refreshAccessToken,
    forgotPasswordRequest
}
