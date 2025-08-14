import "dotenv/config";

import { app } from "./app.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 3001;


// console.log(Error.captureStackTrace());

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is listing at http://localhost:${PORT}`);
        })
    })
    .catch((error) => {
        console.log(`server not started ${error}`);


    })
