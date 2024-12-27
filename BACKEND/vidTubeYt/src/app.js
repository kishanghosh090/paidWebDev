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
//json configuration from frontend form data
app.use(express.json({ limit: "16kb" }));
//url configuration
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
//cookie parser for cookies operations--
app.use(cookieParser());

export { app };
