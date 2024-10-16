const userRepository = require('../repositories/userRepository');

const getAllUsers = () => {
  return userRepository.getAllUsers();
};

const getUserById = (id) => {
  return userRepository.getUserById(id);
};

const createUser = (user) => {
  const newUser = { id: Date.now().toString(), ...user };
  return userRepository.createUser(newUser);
};

const updateUser = (id, userData) => {
  return userRepository.updateUser(id, userData);
};

const deleteUser = (id) => {
  return userRepository.deleteUser(id);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };