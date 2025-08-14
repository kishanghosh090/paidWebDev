import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/User.models.js"
const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")

        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }


        const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        if (!decodedToken) {
            throw new ApiError(401, "Unauthorized user")
        }
        const user = await User.findById(decodedToken._id).select("-password -refreshToken -emailVerificationToken -emailVerificationExpiry")

        if (!User) {
            throw new ApiError(401, "Invalid access token")
        }

        req.user = user
        next()

    } catch (error) {
        throw new ApiError(401, "problem in verifyJWT")
    }
}

export { verifyJWT }