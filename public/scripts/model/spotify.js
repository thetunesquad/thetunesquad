'use strict';

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

function searchArtist1(query1) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
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
        artist1artist2.push(response.artists.items);
        artist12Id.push(response.artists.items[0].id);
      }
    });
  })
  .done(artist12Id.forEach(function (id){
      $.ajax({
        url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
        async: false,
        success: function (response) {
          relatedArtists12.push(response.artists);
          console.log(relatedArtists12);
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
    console.log(artistsAJId);
  })
  .done(function(){
    artistsAJId.forEach(function (id){
      $.ajax({
        url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
        async: false,
        success: function (response) {
          relatedArtistsAJ.push(response.artists);
          console.log(relatedArtistsAJ);
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
    console.log(artistsA1J5Id);
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
          trackData.push( response.tracks[0]);
        }
      })
    })
    console.log(trackData);
  })
  u();
  resultsController.init();
};

document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  searchArtist1();
}, false);

//ajax calls in parallel, not in series
//document.write instead of handlebars template