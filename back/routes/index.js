const express = require('express');


const app = express();

//routas
const userRoutes = require('../routes/userRoutes');
app.use('/users', userRoutes);


module.exports = app;