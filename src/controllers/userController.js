const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const users = userService.getAllUsers();
  res.send(users);
};

const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id, 10);  // Convertimos el id a número
  const user = await userService.getUserById(userId);  // Buscar el usuario por id

  if (user) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
  }
};

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  
  // Usando los métodos correctos para `restana`
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(user));
};

const updateUser = async (req, res) => {
  const userId = parseInt(req.params.id, 10);  // Convertimos el id a número
  const updatedUser = await userService.updateUser(userId, req.body);  // Actualizar usuario con los datos del body

  if (updatedUser) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(updatedUser));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
  }
};

const deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id, 10);  // Asegúrate de convertir el id a número
  const deletedUser = await userService.deleteUser(userId);  // Buscar usuario por id
  
  if (deletedUser) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User correctly deleted' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User was not found' }));
  }
};


module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };