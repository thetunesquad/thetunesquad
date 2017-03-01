'use strict';

function u() {
  let render = Handlebars.compile($('#playlist-template').text());
  $('#playlist').append(
    trackData.map(render)
  );
}

(function(module){
  const spotifyView = {};

  spotifyView.resetButton = function() {
    $('#reset-button').on('click', function(){
      $('#playlist').empty();
      $('#query1').empty();
      $('#query2').empty();
    })
  };

  module.spotifyView = spotifyView;

})(window);


// let source = $('#playlist-template').html();
// let templateRender = Handlebars.compile(source);
//
// trackData.forEach(track){
//   templateRender(track);
// };

// 
// spotifyView.previewButton = function() {
//   $('.icon-play3').click(function(){
//     $(this).play();
//     // $(this).pause();
//   })
// };
 
  // $('.icon-play3').on('click', function(){
  //   preview = window.open(target='popup','{{preview_url}}', 'popup', 'width=150, height=50');
  // })
  // 
  // $('.icon-play3').on('click', function(){
  //   preview.close();
  // })