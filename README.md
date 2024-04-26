# Login Proyect


Este proyecto es una aplicación de Login y SignUp que utiliza un backend desarrollado con Node.js y Express, con Sequelize como ORM para interactuar con la base de datos. Para la autenticación de usuarios, se utiliza JSON Web Tokens (JWT) para la generación y verificación de tokens. Además, se implementa el cifrado de contraseñas mediante la biblioteca bcrypt para garantizar la seguridad de las credenciales de los usuarios.

- Crear una cuenta
- Iniciar sesion 

## Instalacion
Tecnologias

- Node.js.
- Angular.

Pasos para la instalacion
1. Clona el repositorio

    ```
    git clone url

2. Instala las dependencias del frontend:

    ```
    cd front/ 
    npm install

3. Instala las dependencias del backend:

    ```
    cd back/ 
    npm install

## Variables de entorno back
4. En un archivo .env que este en la carpeta back/ y configurar con us datos lo que este entre {}(llaves)
```
PORT=4001
APP=loginproyect
CORS=localhost http://localhost:4200
DB_DATABASE=loginproyect
DB_DIALECT=mysql
DB_HOST=localhost 
DB_PASSWORD= {password}
DB_PORT= {port}
DB_USERNAME={username} 
ENVIRONMENT=development 
LOG_LEVEL=debug 
SESSION_SECRET=secret
```
5. Ejecuta el back 
```
npm run start
```
6. Ejecuta el fron 
```
ng serve
```

### Links de deploy
- [Front]( https://login-flame-nu.vercel.app/login)

- [Back](https://login-3pbp.onrender.com)
