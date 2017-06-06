'use strict';

const pg = require('pg');
const express = require('express');
const request = require('request');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
// const redirect_uri = 'http://localhost:7000/input';


let generateRandomString = function(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let stateKey = 'spotify_auth_state';

const app = express();
const PORT = process.env.PORT || 7000;
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const client = new pg.Client(conString);


client.connect();

app.use(express.static('./public'))
   .use(cookieParser());


app.get('/login', function(req, res) {

  let state = generateRandomString(16);
  res.cookie(stateKey, state);

 // your application requests authorization
  let scope = 'playlist-modify-public';
  res.redirect('https://accounts.spotify.com/authorize?' +
   querystring.stringify({
     response_type: 'code',
     client_id: client_id,
     scope: scope,
     redirect_uri: redirect_uri,
     state: state
   }));
});

app.get('/callback', function(req, res) {
console.log('/callback');
  // your application requests refresh and access tokens
  // after checking the state parameter

  let code = req.query.code || null;
  let state = req.query.state || null;
  let storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        let access_token = body.access_token,
          refresh_token = body.refresh_token;

        let options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(response.body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/token/' + access_token)
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  let refresh_token = req.query.refresh_token;
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      let access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {
  console.log(`THE TUNE SQUAD is being served at ${PORT}`);
});
