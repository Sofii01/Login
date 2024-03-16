const express = require('express');
const userController = require('../controllers/userController');
const { verificarRoles } = require('../middlewares/auth');


const router = express.Router();
// router.get('/user', verificarRoles, userController.middle);
// router.get('/admi', verificarRoles, userController.middle);


router.get('/getAll', userController.getAllUsers);
router.post('/createNewUser', userController.createUser);
router.post('/login', userController.loginUser);


module.exports = router;