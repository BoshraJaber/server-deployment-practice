'use strict';

require('dotenv').config();
//Importing the server file
const server = require('./server.js');
const port = process.env.PORT || 5000; // this is called short circuit
// Invoking the start function from server.js
server.start(port);