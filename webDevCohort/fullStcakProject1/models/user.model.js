import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    reserPasswordToken: {
        type: String
    },
    reserPasswordExpires: {
        type: Date
    },

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)
