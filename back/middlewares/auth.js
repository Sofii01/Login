const jwt = require('jsonwebtoken');
const roles = require('../CONSTANT/roles');



function verificarRoles(req, res, next) {

    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    const decoded = verificarToken(token);
    console.log(decoded)
    if (!decoded || !decoded.rol) {
        return res.status(403).json({ mensaje: 'Acceso no autorizado' });
    }

    // Verificar si el usuario tiene al menos uno de los roles permitidos
    const autorizado = roles.includes(decoded.rol);
    console.log(autorizado)
    if (!autorizado) {
        return res.status(403).json({ mensaje: 'Acceso no autorizado' });
    } 


    // Usuario autorizado, continuar con la siguiente función
    next();
};

function verificarToken(token) {
    try {
      // Verificar y decodificar el token utilizando la clave secreta
      const decoded = jwt.verify(token, process.env.SECRET_KEY || 'secretkey');
      return decoded;
    } catch (error) {
      // Si hay un error al verificar o decodificar el token, se devuelve null
      console.error('Error al verificar el token:', error);
      return null;
    }
  }
module.exports = { verificarRoles }