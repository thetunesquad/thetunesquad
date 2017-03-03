'use strict';

(function(module){
  const loadingController = {};

  loadingController.init = function() {
    $('.tab-content').hide();
    $('#loading').show();
    console.log('we are in the loading route');
    searchArtist1();
  };

  module.loadingController = loadingController;
})(window);
