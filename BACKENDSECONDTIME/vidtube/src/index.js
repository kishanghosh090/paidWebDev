import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5002;

// db connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app is listing at port: ${PORT}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
