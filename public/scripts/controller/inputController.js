'use strict';

(function(module){
  const inputController = {};

  inputController.init = function() {
    $('.tab-content').hide();
    $('#input').show();
    
  };
  
  // search.searchArtist();

  module.inputController = inputController;
})(window);
