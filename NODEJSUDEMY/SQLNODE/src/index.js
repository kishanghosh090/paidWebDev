import app from "./app.js";
import { db } from "./config/db.js";

const PORT = process.env.PORT || 5000;
process.on("SIGINT", async () => {
  console.log("Closing DB pool...");
  await db.end();
  process.exit(0);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
