import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { exit } from "process";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log(connectionInstance.connection.models);

    console.log(
      `MongoDB connected and ready to use. DB host: ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("MongoDB connection ERROR", error);
    exit(1);
  }
};

export default connectDB;
