import { User } from "../models/user.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body
        if (!name || !password || !email) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "user already exist"
            })
        }
        const newUSer = await User.create({ name, email, password })
        if (!newUSer) {
            return res.status(400).json({
                message: "failed to create user"
            })
        }

        const token = await crypto.randomBytes(32).toString("hex")
        console.log(token);

        newUSer.verificationToken = token
        await newUSer.save()





        const transporter = nodemailer.createTransport({
            service: "gmail", // or another service
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email, // Your email to receive messages
            subject: `byteboost sevice client data`,
            text: `http://localhost:3000/api/v1/users/verify/${token}`
        };

        await transporter.sendMail(mailOptions);



        return res.status(201).json({ data: newUSer, message: "user created successfully" })
    } catch (error) {
        return res.status(500).json({
            message: `ERROR:::::::::::::${error.message}`
        })
    }

}

const verifyUser = async (req, res) => {
    const { verifyToken } = req.params

    if (!verifyToken) {
        return res.status(400).json({
            message: "Invalid Token"
        })
    }

    const user = await User.findOne({ verificationToken: verifyToken })

    if (!user) {
        return res.status(400).json({
            message: "Invalid Token"
        })
    }

    user.isVerified = true
    user.verificationToken = undefined

    await user.save()

    return res.status(200).json({
        message: "User verified successfully"
    })


}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(400).json({
            message: "User not found"
        })
    }

    if (!user.isVerified) {
        return res.status(400).json({
            message: "User not verified"
        })
    }

    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }

    const token = await jwt.sign({ id: user._id }, "shhh", { expiresIn: "30d" })

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
        sameSite: "none",
        secure: true
    })
    return res.status(200).json({
        message: "User logged in successfully",
        user,
        token
    })

}

const getMe = async (req, res) => {
    try {

        const userId = req.user
        if (!userId) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        const user = await User.findById(userId).select("-password -__v -isVerified -verificationToken -reserPasswordToken -reserPasswordExpires")

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        return res.status(200).json({
            message: "User fetched successfully",
            user
        })


    } catch (error) {
        return res.status(500).json({
            message: `ERROR:::::::::::::${error.message}`
        })
    }
}

const logoutUser = async (req, res) => {
    if (!req.user) {
        return res.status(200).json({
            message: "Unauthorized user"
        })
    }
    res.cookie("token", null, {
        expires: new Date(0)
    })
    return res.status(200).json({
        message: "User logged out successfully"
    })
}


const forgetPassword = async (req, res) => { }

const resetPassword = async (req, res) => { }

export { register, verifyUser, login, getMe, logoutUser, forgetPassword, resetPassword }