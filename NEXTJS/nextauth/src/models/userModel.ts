import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt, { Secret, SignOptions } from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.isPasswordMatched = async function (
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT
userSchema.methods.getJwtToken = function () {
  const jwtSecret = process.env.JWT_SECRET as string;
  const jwtExpiry = process.env.JWT_EXPIRY as string;

  if (!jwtSecret || !jwtExpiry) {
    throw new Error("JWT configuration missing");
  }

  const signOptions: SignOptions = {
    expiresIn: parseInt(jwtExpiry),
  };

  return jwt.sign(
    {
      id: this._id.toString(),
      email: this.email,
      username: this.username,
    },
    jwtSecret as Secret,
    signOptions
  );
};

export const User = mongoose.models.User || mongoose.model("User", userSchema);
