import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT

// middlewares
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(cookieParser());



app.listen(PORT, () => {
    console.log(`server is listing at PORT ${PORT}`);
})
