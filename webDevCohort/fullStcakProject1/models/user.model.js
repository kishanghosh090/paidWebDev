import mongoose from "mongoose";
import bcrypt from "bcryptjs";


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

userSchema.pre("save", async function (next) {
    
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12)
        return next()
    }
    return next()

})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
export const User = mongoose.model("User", userSchema)

