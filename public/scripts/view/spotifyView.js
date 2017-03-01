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

$('#reset-button').on('click', function(){
  
})


const spotifyView = {};

spotifyView.resetButton = function() {
  $('#reset-button').on('click', function(){
    $('#playlist').empty();
    $('#query1').empty();
    $('#query2').empty();
  })
};
//ATTEMPT TO ADD CLICK EVENT BASED ON SPOTIFY'S EXAMPLE, NOT WORKING YET
//EVERYTHING ATTEMPTED IN A CLICK EVENT IN .JS FILES OPENS PREVIEW_URL IN THE SAME WINDOW, THEN HITTING BACK BUTTON CLEARS OUT PLAYLIST

// $('.icon-play3').on('click', function (e) {
//   e.preventDefault();
//   // var target = e.target;
//   var songToPlay = this.preview_url;
//   songToPlay.play();
// });
//   
// //THIS IS SOME OF THE SOURCE CODE FROM SPOTIFY
//   if (target !== null && target.classList.contains('cover')) {
//     if (target.classList.contains(playingCssClass)) {
//         audioObject.pause();
//     } else {
//       if (audioObject) {
//         audioObject.pause();
//       }
//       fetchTracks(target.getAttribute('data-album-id'), function (data) {
//         audioObject = new Audio(data.tracks.items[0].preview_url);
//         audioObject.play();
//         target.classList.add(playingCssClass);
//         audioObject.addEventListener('ended', function () {
//           target.classList.remove(playingCssClass);
//         });
//         audioObject.addEventListener('pause', function () {
//           target.classList.remove(playingCssClass);
//         });
//       });
//     }
//   }
// });
