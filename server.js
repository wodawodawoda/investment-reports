const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs')
const XLSX = require('xlsx');



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
  const workbook = XLSX.readFileSync('public/data.xlsx');
  const aktywa = workbook.Sheets['Aktywa']
  const data = XLSX.utils.sheet_to_json(aktywa, {defval: 0});
  res.json(data);
});
// Send specific year data
app.get('/api/year/:year', (req, res) => {
  const workbook = XLSX.readFileSync('public/data/data.xlsx');
  const aktywa = workbook.Sheets[req.params.year]
  const data = XLSX.utils.sheet_to_json(aktywa, {header: 1, defval: 0});
  res.json(data);
});
// Send multiple years sheets data in one json file eg. [[2013], [2014]] => '/api/range/2013-2014'
app.get('/api/range/:years', (req, res) => {
  const workbook = XLSX.readFileSync('public/data/data.xlsx');
  const years = req.params.years.match(/\d{4}/g);
  let toSend = [];
  for(let i = years[0]; i < years[1]; i++) {
    const sheet = workbook.Sheets[i]
    const data = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: 0});
    toSend.push(data)
  }
  res.json(toSend);
});

app.get('/api/users', (req, res) => {
    console.log('elo')
  var obj = JSON.parse(fs.readFileSync('public/users.json', 'utf8'));
    res.json(obj)
});



server.listen(port)