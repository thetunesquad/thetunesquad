'use strict';

(function(module){
  const inputController = {};

  inputController.init = function() {
    $('.tab-content').hide();
    $('#input').show();
  };

  module.inputController = inputController;
})(window);
