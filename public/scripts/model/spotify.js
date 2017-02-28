'use strict';

const search = {};

const artist1artist2 = [];

var searchArtist1 = function (query1) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: query1,
      type: 'artist',
      limit: 1
    },
    success: function (response) {
      console.log(response);
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
      console.log(response);
    }
  });
};

document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  searchArtist1($('#query1').val());
  searchArtist2($('#query2').val());
}, false);

function relatedArtist() {
  $.ajax({
    url: 'https://api.spotify.com/v1/artists/30b9WulBM8sFuBo17nNq9c/related-artists',
    success: function (response) {
      console.log(response);
    }
  });
}
