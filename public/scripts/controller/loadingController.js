'use strict';

(function(module){
  const loadingController = {};

  loadingController.init = function() {
    $('.tab-content').hide();
    console.log('we are in the loading route');
    spotify.searchArtist1();
  };

  module.loadingController = loadingController;
})(window);
