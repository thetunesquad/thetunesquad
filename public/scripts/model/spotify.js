'use strict';

(function(module) {

  const spotify = {};

  const search = {};

  const artist1artist2 = [];

  let artist12Id = [];

  const relatedArtists12 = [];

  const relatedArtistsAJ = [];

  let artistsA1J5Id = [];

  let artistsAJId = [];

  const trackData = [];

  let allId = [];

  let AJ = [];

  spotify.searchArtist1 = function(query1) {
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: $('#query1').val(),
        type: 'artist',
        limit: 1
      },
      headers: {
        Authorization: 'Bearer cac843d7284a492aa07e28bf104dfcec',
      },
      async: false,
      success: function (response) {
        if(response.artists.items.length > 0) {
          artist1artist2.push(response.artists.items);
          artist12Id.push(response.artists.items[0].id);
        } else {
          alert('Sorry, one of the artists you entered doesn\'t match in our database. Please try again.');
          window.location = '/';
        }
      }
    })
    .done(function(){
      $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
          q: $('#query2').val(),
          type: 'artist',
          limit: 1
        },
        async: false,
        success: function (response) {
          if(response.artists.items.length > 0) {
            artist1artist2.push(response.artists.items);
            artist12Id.push(response.artists.items[0].id);
          } else {
            alert('Sorry, one of the artists you entered doesn\'t match in our database. Please try again.');
            window.location = '/';
          }
        }
      })
    })
    .done(artist12Id.forEach(function (id){
      $.ajax({
        url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
        async: false,
        success: function (response) {
          relatedArtists12.push(response.artists);
          console.log('got related artists of original 2');
        }
      })
    }))
    .done(function(){
      for (let i = 0; i < 10; i++) {
        if(!AJ.includes(relatedArtists12[0][i].id)) {
          AJ.push(relatedArtists12[0][i].id);
        }
        if(!AJ.includes(relatedArtists12[1][i].id)) {
          AJ.push(relatedArtists12[1][i].id);
        }
      }
      artistsAJId = AJ.slice(0, 10);
      console.log('got id of 10 unique');
    })
    .done(function(){
      artistsAJId.forEach(function (id){
        $.ajax({
          url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
          async: false,
          success: function (response) {
            relatedArtistsAJ.push(response.artists);
            console.log('got related artists of 10 unique');
          }
        })
      })
    })
    .done(function(){
      relatedArtistsAJ.forEach(function(element) {
        let truncated = element.slice(0,5);
        truncated.map(function(artist) {
          artistsA1J5Id.push(artist.id);
        })
      })
      console.log('pushing ids of 50 artists');
    })
    .done(function(){
      artist12Id.forEach(function(id){
        if (!allId.includes(id)){
          allId.push(id);
        }
      })

      artistsAJId.forEach(function(id){
        if (!allId.includes(id)){
          allId.push(id);
        }
      })

      artistsA1J5Id.forEach(function(id){
        if (!allId.includes(id)){
          allId.push(id);
        }
      })
    })
    .done(function(){
      allId.forEach(function(id) {
        $.ajax({
          url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
          async: false,
          success: function (response) {
            if (response.tracks[0]) {
              trackData.push( response.tracks[0]);
            }
          }
        })
      })
      console.log('got track data for final playlist');
    }).done(function(){
      spotifyView.displayPlaylist();
      createPlaylist.pushUri();
      console.log('ajax call complete');
      page.redirect('/results');
    })
  }
  module.spotify = spotify;
  module.artist1artist2 = artist1artist2;
  module.trackData = trackData;
})(window);
