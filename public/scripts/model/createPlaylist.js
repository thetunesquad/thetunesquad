'use strict';

let trackUri = [];
let access_token = '';
let redirect_uri = '';
let client_id = '';

function x(){
  trackData.forEach(function(track){
    trackUri.push(track.uri);
  })
}


// function createPlaylist() {
// 	$.ajax({
//     url = 'https://api.spotify.com/v1/users/{user_id}/playlists',
// 		method: 'POST',
// 		data: JSON.stringify({
// 			'name': name,
// 			'public': true
// 		}),
// 		dataType: 'json',
// 		headers: {
// 			'Authorization': 'Bearer ' + access_token,
// 			'Content-Type': 'application/json'
// 		},
// 		success: function(r) {
// 			console.log('create playlist response', r);
// 			callback(r.id);
// 		},
// 		error: function(r) {
// 			callback(null);
// 		}
// 	});
// }
//
// function addTracksToPlaylist() {
// 	$.ajax({
//     url = 'https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks';
// 		method: 'POST',
// 		data: JSON.stringify(tracks),
// 		dataType: 'text',
// 		headers: {
// 			'Authorization': 'Bearer ' + access_token,
// 			'Content-Type': 'application/json'
// 		},
// 		success: function(r) {
// 			console.log('add track response', r);
// 			callback(r.id);
// 		},
// 		error: function(r) {
// 			callback(null);
// 		}
// 	});
// }


$('#export-button').click(function() {
  event.stopPropagation();
  event.preventDefault();
})
