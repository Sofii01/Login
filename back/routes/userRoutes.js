const express = require('express');
const userController = require('../controllers/userController');
const { verificarRoles } = require('../middlewares/auth');


const router = express.Router();

router.get('/getAll', userController.getAllUsers);
router.post('/createNewUser', userController.createUser);
router.post('/login', userController.loginUser);

// Otra ruta protegida que requiere el rol de "usuario"
router.get('/usuario', verificarRoles, userController.middle);
router.get('/admi', verificarRoles, userController.middle);


module.exports = router;