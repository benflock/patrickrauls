require('dotenv').config();
//modules
const path = require('path'),
    express = require('express');

//derivatives
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
