const express = require('express');
const http = require('http');
const path = require('path');

//localhost port
const port = 5000;
// create express app
const app = express();

// create server instance
const server = http.Server(app);



// Middleware for production
// It serves basic React HTML template ('#root').
app.use('/', express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

server.listen(port)
