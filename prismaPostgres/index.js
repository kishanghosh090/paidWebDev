import express from "express";
import { prisma } from "./src/config/db.js";

const app = express();
const PORT = 4002;

app.use(express.json());
app.post("/api/users", async (req, res) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return res.json(user);
});
app.listen(PORT, () => {
  console.log(`server is listing at PORT ${PORT}`);
});
