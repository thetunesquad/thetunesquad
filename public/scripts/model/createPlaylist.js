'use strict';

function createPlaylist() {
  $.ajax({
    url: 'https://api.spotify.com/v1/users/{user_id}/playlists',
    method: 'PUT',
    headers: {
      authorization: `${access token}`,
      content: application/json,   
    }
    data: {
      q: $('#query1').val(),
      type: 'artist',
      limit: 1
    },
    async: false,
    success: function (response) {
      artist1artist2.push(response.artists.items);
      artist12Id.push(response.artists.items[0].id);
    }
  })
}
