'use strict';

// let source = $('#playlist-template').html();
// let templateRender = Handlebars.compile(source);
//
// trackData.forEach(track){
//   templateRender(track);
// };

function u() {
  let render = Handlebars.compile($('#playlist-template').text());
  $('#playlist').append(
    trackData.map(render)
  );
};


(function(module){
  const spotifyView = {};

  spotifyView.resetButton = function() {
    $('#reset-button').on('click', function(){
      $('#playlist').empty();
      $('#query1').empty();
      $('#query2').empty();
    })
  }
  
  module.spotifyView = spotifyView;
  
})(window);