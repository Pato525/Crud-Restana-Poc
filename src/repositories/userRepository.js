let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'James Doe', email: 'james@example.com' }
  ];

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find(user => user.id === id);
};

const createUser = (user) => {
  users.push(user);
  return user;
};

const updateUser = (id, userData) => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...userData };
    return users[index];
  }
  return null;
};

const deleteUser = (id) => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  return null;
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };