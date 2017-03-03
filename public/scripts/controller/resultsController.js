'use strict';

(function(module){
  const resultsController = {};

  resultsController.init = function() {
    $('.tab-content').hide();
    $('#results').show();
    console.log('we are in the results route');
  };

  module.resultsController = resultsController;
})(window);
