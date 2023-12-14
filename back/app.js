
const express = require('express');

//models
const models = require('./models');

// routes
const routes = require('./routes');


//
const app = express();

models.sequelize.authenticate()
    .then(()=> {
        console.log('Conexion con la base de datos exitosa');
    })
    .catch((err) => {
        console.log(err + 'Conexion fallida');
    });

app.use('/', routes);

module.exports = app;