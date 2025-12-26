import { db } from "../config/db.js";

export const createUser = async (name, email) => {
  const [result] = await db.execute(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );

  return result.insertId;
};

export const getUsers = async () => {
  const [rows] = await db.execute("SELECT * FROM users");
  return rows;
};

export const getUserById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

export const updateUser = async (id, name, email) => {
  await db.execute("UPDATE users SET name=?, email=? WHERE id=?", [
    name,
    email,
    id,
  ]);
};

export const deleteUser = async (id) => {
  await db.execute("DELETE FROM users WHERE id=?", [id]);
};
