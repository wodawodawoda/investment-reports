const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs')


//localhost port
const port = 5000;

// create express app
const app = express();
// create server instance
const server = http.Server(app);

// Middleware for production
// It serves basic React HTML template ('#root').



app.use('/', express.static(`${__dirname}/public`));

// app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/api/excel', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'public', 'text.json'));
  res.json(data);
});

server.listen(port)


const XLSX = require('xlsx');
var workbook = XLSX.readFileSync('public/data.xlsx');
const aktywa = workbook.Sheets['Aktywa']

var parse = JSON.stringify(aktywa, undefined, 2);
const data = XLSX.utils.sheet_to_json(aktywa, {defval: 0});
console.log(data)
//
// fs.writeFile(__dirname + "/public/text.json", parse, (err) => {
//   if(err) throw err
// } )
