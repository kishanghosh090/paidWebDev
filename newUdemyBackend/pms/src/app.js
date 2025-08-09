import express from "express"
import cors from "cors"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));

app.use(cors({
    origin: "*",
    methods: ["POST", "GET"],
}))

export { app }