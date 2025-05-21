import express from 'express';
import { createServer } from 'http';

import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";
import connectToSocket from './controllers/socketManager.js';
import userRoutes from './routes/user.routes.js'

const app = express()

const server = createServer(app)
const io = connectToSocket(server)


app.set("port", (process.env.PORT || 8000))
app.use(cors({
    origin: '*',
}))
app.use(express.json({ limit: "40kb" }))
app.use(express.urlencoded({ limit: "40kb", extended: true }))




app.use("/api/v1/users", userRoutes)

const start = async () => {
    const connectionDb = await mongoose.connect(`mongodb+srv://kishan123:kishan123@cluster0.o9g50gg.mongodb.net/zoomClonne`)
    server.listen(app.get("port"), () => {
        console.log(`server is listing at port 8000 ${connectionDb.connection.host}`);

    })
}

start()