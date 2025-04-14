import express from "express";
import { createServer } from "http";

import mongoose from "mongoose";
import cors from "cors";
import connectToSocket from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
// socket config----
const io = connectToSocket(server);

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// routes----------------------------
import userRoutes from "./routes/users.route.js";
app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectionDB = await mongoose.connect(
    `mongodb+srv://kishan123:kishan123@cluster0.96dgi.mongodb.net/webrtc`
  );

  console.log(`MONGO DB CONNECTED ${connectionDB.connection.host}`);

  server.listen(app.get("port"), () => {
    console.log(`server listening on port ${app.get("port")}`);
  });
};

start();
