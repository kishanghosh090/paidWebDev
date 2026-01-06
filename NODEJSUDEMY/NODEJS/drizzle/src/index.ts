import { db } from "./db/index.ts";
import { usersTable } from "./db/schema.ts";

async function getAllUsers() {
  const users = await db.select().from(usersTable);
  console.log(users);
}
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
// createUser({ name: "kishan", email: "k@gmail.com", age: 20 });
getAllUsers();
