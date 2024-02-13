const userService = require('../services/userService');
const { User } = require('../models')

async function createUser(req, res) {
    try {
        const newUser = req.body;
        const { userName } = req.body;
        //verify user
        let user = await User.findOne({ where: { userName } });

        if (user !== null) {
            return res.status(409).json({ msg: `El usuario ${userName} YA EXISTE` });
        }

        const userCreated = await userService.createNewUser(newUser);
        return res.status(201).json(userCreated);
    } catch (error) {
        return res.status(400).json({ mensaje: 'Error al crear usuario' });
    

    }
}
async function getAllUsers(req, res) {
    const users = await userService.getAll();
    res.status(200).send(users);
}

async function getUserById(req, res, next) {
    const { id } = req.params;
    try {
        const user = await userService.getById(id);
        if (user != null) {
            return res.status(200).send(user);
        } else {
            res.status(404).json({ mensaje: 'Error al buscar usuario' })
        }

    } catch (error) {
        next(error)

    }

}

async function loginUser(req, res) {
    try {
        
        const { userName, password } = req.body;

        const token = await userService.login(userName, password);
        if (!token) {
            return res.status(401).json({ mensaje: 'Usuario no encontrado' });
        }
        return res.status(200).json({ token });
        
    } catch (error) {
        console.error('Error al iniciar sesión: ', error);
        return res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });
    
    }
}
module.exports = { createUser, getAllUsers, getUserById, loginUser }