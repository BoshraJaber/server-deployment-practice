'use strict';
const express = require('express');
const app = express();
// importing the error handlers files
const notFountHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// create a route for errors:
app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});
app.get('/status', (req,res)=>{
  res.send({
    'domain': 'https://boshra-server-deploy-prod.herokuapp.com/',
    'status': 'running',
    'port': 3000,
  });
});
// these must be after all of the routes
app.use('*', notFountHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}
// to use this outside the file we export what we need
// exports is a property inside the module object
module.exports = {
  app: app,
  start: start,
};