import * as userService from "../services/user.services.js";

export const create = async (req, res) => {
  const { name, email } = req.body;
  const id = await userService.createUser(name, email);
  res.json({ id, message: "User created" });
};

export const getAll = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const getOne = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
};

export const update = async (req, res) => {
  const { name, email } = req.body;
  await userService.updateUser(req.params.id, name, email);
  res.json({ message: "User updated" });
};

export const remove = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: "User deleted" });
};
