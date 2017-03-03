'use strict';

(function(module){
  const loadingController = {};

  loadingController.init = function() {
    //$('#loading').show();
    $('.tab-content').hide();
    console.log('we are in the loading route');
    searchArtist1();
  };

  module.loadingController = loadingController;
})(window);
