'use strict';

const search = {};

const artist1artist2 = [];

const artistId = [];

const relatedArtists = [];

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
      artistId.push(response.artists.items[0].id);
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
      artistId.push(response.artists.items[0].id);
    }
  });
};

document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  searchArtist1($('#query1').val());
  searchArtist2($('#query2').val());
  // console.log(artist1artist2);
  console.log(artistId);
}, false);

function relatedArtist() {
  artistId.forEach(function (id){
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
      success: function (response) {
        //console.log(response);
        relatedArtists.push(response.artists);
        console.log(relatedArtists);
      }
    })
  })
}

function unique() {
  const AJ = [];
  for (var i = 0; i < 10; i++) {
    if(!AJ.includes(relatedArtists[0][i].id)) {
      AJ.push(relatedArtists[0][i].id);
    }
    if(!AJ.includes(relatedArtists[1][i].id)) {
      AJ.push(relatedArtists[1][i].id);
    }
  }
  let AJSliced =  AJ.slice(0, 10);
  console.log(AJSliced);
  return AJSliced;
}

const trackId = [];

function ajaxGetTracks() {
  artistId.forEach(function(id) {
    $.ajax({
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
      success: function (response) {
        trackId.push(response.tracks[0].id);
        console.log(trackId);
      }
    })
  })
}


// ajaxGetTracks();
