const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const users = userService.getAllUsers();
  res.send(users);
};

const getUserById = async (req, res) => {
  const user = userService.getUserById(req.params.id);

};

const createUser = async (req, res) => {
  const user = userService.createUser(req.body);
  res.status(201).send(user);
};

const updateUser = async (req, res) => {
  const updatedUser = userService.updateUser(req.params.id, req.body);
  if (updatedUser) {
    res.send(updatedUser);
  } else {
    res.sendStatus(404);
  }
};

const deleteUser = async (req, res) => {
  const deletedUser = userService.deleteUser(req.params.id);
  if (deletedUser) {
    res.send(deletedUser);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };