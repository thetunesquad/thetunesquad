'use strict';

(function(module){
  const loginController = {};

  loginController.init = function() {
    $('#login').hide();
    $('#input').show();
  };

  module.loginController = loginController;
})(window);
