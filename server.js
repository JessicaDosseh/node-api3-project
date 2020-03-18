const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
