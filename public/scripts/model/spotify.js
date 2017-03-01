'use strict';

const search = {};

const artist1artist2 = [];

let artist12Id = [];

const relatedArtists12 = [];

const relatedArtistsAJ = [];

let artistsA1J5Id = [];

let artistsAJId = [];

const trackData = [];

var searchArtist1 = function (query1) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: query1,
      type: 'artist',
      limit: 1
    },
    success: function (response) {
      artist1artist2.push(response.artists.items);
      artist12Id.push(response.artists.items[0].id);
    }
  });
};

var searchArtist2 = function (query2) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: query2,
      type: 'artist',
      limit: 1
    },
    success: function (response) {
      artist1artist2.push(response.artists.items);
      artist12Id.push(response.artists.items[0].id);
    }
  });
};

document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  searchArtist1($('#query1').val());
  searchArtist2($('#query2').val());
  console.log(artist1artist2);
  console.log(artist12Id);

}, false);

function q() {
  artist12Id.forEach(function (id){
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
      success: function (response) {
        relatedArtists12.push(response.artists);
        console.log(relatedArtists12);
      }
    })
  })
}

function w() {
  let AJ = [];
  for (var i = 0; i < 10; i++) {
    if(!AJ.includes(relatedArtists12[0][i].id)) {
      AJ.push(relatedArtists12[0][i].id);
    }
    if(!AJ.includes(relatedArtists12[1][i].id)) {
      AJ.push(relatedArtists12[1][i].id);
    }
  }
  artistsAJId = AJ.slice(0, 10);
  console.log(artistsAJId);
  //return artistsAJId;
}

function e() {
  artistsAJId.forEach(function (id){
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
      success: function (response) {
        relatedArtistsAJ.push(response.artists);
        console.log(relatedArtistsAJ);
      }
    })
  })
}

function r() {
  relatedArtistsAJ.forEach(function(element) {
    let truncated = element.slice(0,5);
    truncated.map(function(artist) {
      artistsA1J5Id.push(artist.id);
    })
  })
  console.log(artistsA1J5Id);
}

let allId = [];

function t() {
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
}


function y() {
  allId.forEach(function(id) {
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
      success: function (response) {
        trackData.push( response.tracks[0]);
      }
    })
  })
  console.log(trackData);
}



// ajaxGetTracks();
