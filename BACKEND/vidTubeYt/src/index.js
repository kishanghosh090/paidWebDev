import { app } from "./app.js";
import "dotenv/config";
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 3000;

// connected to database ---------------------
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port 3000. http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection error: ", error);
    throw error;
  });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

// (async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URL}/${DB_NAME}`
//     );
//     app.on("error", (error) => {
//       console.log("MongoDB connection error");
//       throw error;
//     });
//       app.listen(3000, () => {
//         console.log("Server is running on port 3000");
//       })
//   } catch (error) {
//     console.log("MONGODB connection error: ", error);
//     throw error;
//   }
// })();
