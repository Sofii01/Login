const express = require('express');
const userController = require('../controllers/userController');


const router = express.Router();

router.get('/getAll', userController.getAllUsers);
router.post('/createNewUser', userController.createUser);
router.post('/login', userController.loginUser)
module.exports = router;