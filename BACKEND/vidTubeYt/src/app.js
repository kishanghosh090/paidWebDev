import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// Middleware for parsing cookies
app.use(cookieParser());

// Import and use routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

export { app };
