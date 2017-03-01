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
