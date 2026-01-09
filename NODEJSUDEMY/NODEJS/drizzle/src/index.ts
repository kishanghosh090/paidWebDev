import { sql } from "drizzle-orm";
import { db } from "./db/index";
import { usersTable } from "./db/schema";
import express from "express";

const app = express();
const PORT = 3004;

app.use(express.json({ limit: "16mb" }));
app.use(express.urlencoded({ extended: true }));

import bookRouter from "./routes/book.routes";
app.use("/api/v1/books", bookRouter);

app.listen(PORT, () => {
  console.log(`server is listning at PORT ${PORT}`);
});

// async function getAllUsers() {
//   const users = await db.select().from(usersTable);

//   console.log(users);
// }

async function createUser({
  name,
  email,
  age,
}: {
  name: string;
  email: string;
  age: number;
}) {
  await db.insert(usersTable).values({
    name,
    age,
    email,
  });
}
// createUser({ name: "karan", email: "kkkk@gmal.com", age: 20 });
// // getAllUsers();
