'use strict';

function displayPlaylist() {
  $('#image1 img').attr('src', artist1artist2[0][0].images[0].url);
  $('#image2 img').attr('src', artist1artist2[1][0].images[0].url);
  let render = Handlebars.compile($('#playlist-template').text());
  $('#playlist').append(
    trackData.map(render)
  );
  spotifyView.playPreview();
};

const spotifyView = {};

spotifyView.resetButton = function() {
  $('#reset-button').on('click', function(){
    $('#playlist').empty();
    $('#query1').empty();
    $('#query2').empty();
  })
};

spotifyView.playPreview = function() {
$('.icon-play3').on('click', function(e) {
  console.log(this.id);
  $('audio').attr('src', this.id);
  });
};
