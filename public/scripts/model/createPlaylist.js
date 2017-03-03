'use strict';

const createPlaylist = {};

let trackUri = [];
let access_token = '';
let redirect_uri = '';
let client_id = '';
let name = '';

createPlaylist.pushUri = function() {
  trackData.forEach(function(track){
    trackUri.push(track.uri);
  })
}

createPlaylist.getPlaylistName = function() {
  name = $('#playlist-name').val();
}

createPlaylist.getUsername = function(callback) {
  console.log('getUsername');
  var url = 'https://api.spotify.com/v1/me';
  $.ajax(url, {
    dataType: 'json',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: function(r) {
      console.log('got username response', r);
      callback(r.id);
    },
    error: function(r) {
      callback(null);
    }
  });
}

createPlaylist.createPlaylist = function(username, name, callback) {
  console.log('createPlaylist', username, name);
  var url = 'https://api.spotify.com/v1/users/' + username +
  '/playlists';
  $.ajax(url, {
    method: 'POST',
    data: JSON.stringify({
      'name': name,
      'public': true
    }),
    dataType: 'json',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    success: function(r) {
      console.log('create playlist response', r);
      callback(r.id);
    },
    error: function(r) {
      callback(null);
    }
  });
}

createPlaylist.addTracksToPlaylist = function(username, playlist, tracks, callback) {
  console.log('addTracksToPlaylist', username, playlist, tracks);
  var url = 'https://api.spotify.com/v1/users/' + username +
  '/playlists/' + playlist +
  '/tracks';
  $.ajax(url, {
    method: 'POST',
    data: JSON.stringify(tracks),
    dataType: 'text',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    success: function(r) {
      console.log('add track response', r);
      callback(r.id);
      alert('Playlist created successfully. It is now in your Spotify library!');
    },
    error: function(r) {
      callback(null);
      alert('Playlist was not created. Please refresh your browser and try again.');
    }
  });
}

$('#export-button').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  createPlaylist.getPlaylistName();
  console.log('working');
  createPlaylist.getUsername(function(username) {
    console.log('got username', username);
    createPlaylist.createPlaylist(username, name, function(playlist) {
      console.log('created playlist', playlist);
      createPlaylist.addTracksToPlaylist(username, playlist, trackUri, function() {
        console.log('tracks added.');
      });
    });
  });
})
