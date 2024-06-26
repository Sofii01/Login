require('dotenv').config();
const express = require('express');
const cors = require('cors');
//models
const models = require('./models');

// routes
const routes = require('./routes');


//
const app = express();

// app.use(cors({ origin: 'http://localhost:4200' }));
app.use(cors())
models.sequelize.authenticate()
    .then(()=> {
        console.log('Conexion con la base de datos exitosa');
    })
    .catch((err) => {
        console.log(err + 'Conexion fallida');
    });

// const { sequelize, User } = require('./models'); // Ajusta la ruta según tu estructura de archivos

// // Sincroniza el modelo con la base de datos
// await sequelize.sync();
app.use(express.json());
app.use('/', routes);

app.listen(process.env.PORT,()=> console.log("server listen:\nhttp://localhost:" + process.env.PORT))