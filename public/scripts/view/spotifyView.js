'use strict';

(function(module) {

  const spotifyView = {};

  spotifyView.displayPlaylist = function() {
    $('#image1').attr('src', artist1artist2[0][0].images[0].url);
    $('#image2').attr('src', artist1artist2[1][0].images[0].url);
    let render = Handlebars.compile($('#playlist-template').text());
    $('#playlist').append(
      trackData.map(render)
    );
    spotifyView.playPreview();
  };

  spotifyView.playPreview = function() {
    $('.icon-play3').on('click', function(e) {
      console.log(this.id);
      $('audio').attr('src', this.id);
    });
  };

  module.spotifyView = spotifyView;
})(window);

$('#reset-button').on('click', function(){
  $('#playlist').empty();
  $('#query1').empty();
  $('#query2').empty();
  page('/input');
});

//
//
// $('.icon-play3').on('click', function(e) {
//   console.log(this.id);
//   $('#audio').attr('src', this.id);
// });
