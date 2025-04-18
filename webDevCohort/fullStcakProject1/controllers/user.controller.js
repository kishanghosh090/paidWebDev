import { User } from "../models/user.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import { text } from "stream/consumers"

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

const login = async (req, res) => { }

export { register, login }