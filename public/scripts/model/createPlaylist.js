'use strict';

let trackUri = [];
let access_token = '';
let redirect_uri = '';
let client_id = '';
let name = '';

function pushUri(){
  trackData.forEach(function(track){
    trackUri.push(track.uri);
  })
}

function getPlaylistName(){
  name = $('#playlist-name').val();
}

function getUsername(callback) {
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

function createPlaylist(username, name, callback) {
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

function addTracksToPlaylist(username, playlist, tracks, callback) {
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
		},
		error: function(r) {
			callback(null);
		}
	});
}

$('#export-button').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  getPlaylistName();
  console.log("working");
  getUsername(function(username) {
    console.log('got username', username);
    createPlaylist(username, name, function(playlist) {
      console.log('created playlist', playlist);
      addTracksToPlaylist(username, playlist, trackUri, function() {
        console.log('tracks added.');
      });
    });
  });
})
