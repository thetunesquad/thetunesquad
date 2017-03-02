'use strict';

(function(module){
  const inputController = {};

  inputController.init = function() {
    $('.tab-content').hide();
    // $('#input').show();
    $('#login').show();
    $('#testbutton').on('click', function()
     {
      window.open('/login', '_self');
    });
  };

  module.inputController = inputController;
})(window);
