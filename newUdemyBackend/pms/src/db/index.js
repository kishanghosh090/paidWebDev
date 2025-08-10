import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not found")
}

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MONGODB connected || ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MONGODB connection error ${error}`);
        process.exit(1)
    }
}

export default connectDB;