'use strict';

function u() {
  $('#image1 img').attr('src', artist1artist2[0][0].images[0].url);
  $('#image2 img').attr('src', artist1artist2[1][0].images[0].url);
  let render = Handlebars.compile($('#playlist-template').text());
  $('#playlist').append(
    trackData.map(render)
  );
}
