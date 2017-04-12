const express = require('express');

var app = express();

app.get('/', (req, res) =>{
  res.status(404).send({
    error: 'page not found.'
  });
});

app.get('/users', (req, res) =>{
  res.status(200).send([
    { name: 'Darling', age: 25 },
    { name: 'jean', age: 23 },
    { name: 'rose', age: 20 }
  ]);
});

app.listen(3000, ()=>{
  console.log('Port 3000 is ready...');
});
module.exports.app = app;
