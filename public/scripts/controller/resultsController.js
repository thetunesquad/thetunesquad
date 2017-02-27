'use strict';

(function(module){
  const resultsController = {};

  resultsController.init = function() {
    $('.tab-content').hide();
    $('#results').show();
  };

  module.resultsController = resultsController;
})(window);
