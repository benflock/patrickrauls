require('dotenv').config();
//modules
const path = require('path'),
    express = require('express');
//routes
const routes = require('./routes/index.js');
//derivatives
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
