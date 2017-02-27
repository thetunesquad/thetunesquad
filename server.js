'use strict';

const pg = require('pg');
const express = require('express');
const request = require('request');
const querystring = require('querystring');
const app = express();
const PORT = process.env.PORT || 7000;
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {
  console.log(`THE TUNE SQUAD is being served at ${PORT}`);
});
