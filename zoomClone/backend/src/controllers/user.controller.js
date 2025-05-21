import { User } from "../models/user.model.js"
import crypto from "crypto"
const register = async (req, res) => {
    const { name, username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (user) return res.status(400).json({ error: "User already exist" })
        const newUser = await User.create({ name, username, password })
        res.status(201).json({ newUser })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username, password })
        if (!user) return res.status(400).json({ error: "User not found" })

        let token = crypto.randomBytes(20).toString("hex")
        user.token = token
        await user.save()
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



export { register, login }