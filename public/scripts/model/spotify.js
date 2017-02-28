'use strict';

(function(module) {
  const search = {};
  
  search.all = [];
  
  // var searchArtist = function(query) {
  //   $('#artist-button').on('click', function(){
  //     $.ajax({
  //       url: 'https://api.spotify.com/v1/search',
  //       data: {
  //         q: $('#query').val(),
  //         type: 'artist'
  //       }.then(function (response) {
  //         console.log(response);
  //       })
  //     });
  //   })
  // }
  
  var searchAlbums = function (query1) {
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
  
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums($('#query1').val());
    // searchAlbums($('#query2').val());
    }, false);

  module.search = search;
})(window);



// 
// search.searchArtist = function(callback) {
//   $('#artist-button').on('click', function(){
//     $.ajax('https://api.spotify.com/v1/search?q=Muse&type=track,artist&market=US" -H "Accept: application/json" -H "Authorization: Bearer BQChzQfVMxMaGogdKH7Zx7Kn0yjxMddBm6-jJ-pkv9xcsEMtxtTui3dTiZjEp12nNj4Hz-W2PWzGdbaVwSVRGL3h4a6iG5la5nHx13Ld7CY_gPYlj_i7zz6kUmA6nvB4AxNFgEFUxVZG16-B-g')
//     .then(searchResult => search.all = searchResult, err => console.error(err))
//     .then(callback);
//   });
// }
// console.log(search.all);
// 