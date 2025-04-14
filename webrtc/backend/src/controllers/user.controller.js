import httStatus from "http-status";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(httStatus.BAD_REQUEST)
      .json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(httStatus.NOT_FOUND)
        .json({ message: "User not found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      let token = crypto.randomBytes(20).toString("hex");

      user.token = token;
      await user.save();

      return res
        .status(httStatus.OK)
        .json({ message: "Login successful", token });
    }

    return res
      .status(httStatus.UNAUTHORIZED)
      .json({ message: "Invalid credentials" });
  } catch (error) {
    return res.json({ message: error.message || "Something went wrong" });
  }
};

const register = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res
      .status(httStatus.BAD_REQUEST)
      .json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(httStatus.FOUND)
        .json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      username,
      password: hashedPassword,
    });
    await user.save();

    res
      .status(httStatus.CREATED)
      .json({ message: "User created successfully" });
  } catch (error) {
    return res.json({ message: error.message || "Something went wrong" });
  }
};

export { login, register };
