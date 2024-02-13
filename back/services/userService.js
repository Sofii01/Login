const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// array de roles permitidos 



async function createNewUser(data) {
  try {

    // Cifra la contraseña con el salt
    const encryptedPassword = await bcrypt.hash(data.password, 10);
    // Reemplaza la contraseña en los datos del usuario
    data.password = encryptedPassword;

    const userCreated = await User.create(data);
    console.log(userCreated)
    return { user: userCreated.toJSON() };

  } catch (error) {
    console.error('Error al crear un usuario', error);
    throw error
  }
}
async function getAll() {
  const listUsers = await User.findAll()
  return listUsers;
}
async function getById(id) {
  const user = await User.findByPk(id)
  return user;


}
// ver bien 
// Genera un token JWT válido para el usuario
function generateJWT(datosUsuario) {
  try {
    // Genera un token JWT para el usuario recién registrado
    const tokenLogin = jwt.sign({ id: datosUsuario.id, userName: datosUsuario.userName, rol: datosUsuario.rol }, process.env.SECRET_KEY || 'secretkey', { expiresIn: '1h' });
    return tokenLogin;
  } catch (error) {
    console.error('Error al generar JWT:', error);
    throw error;
  }
}


async function login(userName, pass) {
  try {
    // Busca el usuario por nombre de usuario
    const usuario = await User.findOne({ where: { userName } });
    if (!usuario) {
      return null; 
    }

    // Compara la contraseña proporcionada con la contraseña almacenada cifrada
    const contrasenaValida = await bcrypt.compare(pass, usuario.password);
    if (!contrasenaValida) {
      return null;   
    }
    
    // Genera un token JWT para el usuario
    const tokenLogin = generateJWT(usuario);
    
    return tokenLogin;
  } catch (error) {
    throw error;
  }
}
module.exports = { createNewUser, getAll, getById, login }