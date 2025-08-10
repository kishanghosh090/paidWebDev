import "dotenv/config";

import { app } from "./app.js";

const PORT = process.env.PORT || 3001;


console.log(Error.captureStackTrace());



app.listen(PORT, () => {
    console.log(`server is listing at PORT : ${PORT}`);
})