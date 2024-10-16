const restana = require('restana');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const app = restana();
app.use(bodyParser.json());

// Rutas para la entidad User
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.start(3000).then(() => {
  console.log('Server running on port 3000');
});