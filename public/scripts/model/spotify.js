'use strict';

const search = {};

const artist1artist2 = [];

const artist12Id = [];

const relatedArtists12 = [];

const relatedArtistsAJ = [];

const artistsA1J5Id = [];

let artistsAJId = [];

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

function getRelated12() {
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

function getUniqueAJ() {
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

function getRelatedAJ() {
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

function getUniqueA1J5() {
  relatedArtistsAJ.forEach(function(element) {
    let truncated = element.slice(0,5);
    truncated.map(function(artist) {
      artistsA1J5Id.push(artist.id);
    })
  })
  console.log(artistsA1J5Id);
}

const trackData = [];

function ajaxGetTracks() {
  artistId.forEach(function(id) {
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
      success: function (response) {
        trackData.push( response.tracks[0].artists[0].name, response.tracks[0].name, response.tracks[0].id);
        console.log(trackData);
      }
    })
  })
}


// ajaxGetTracks();
