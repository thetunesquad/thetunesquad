'use strict';

(function(module){
  const loginController = {};

  loginController.init = function() {
    $('#login').show();
    $('#testbutton').on('click', function()
     {
      window.open('/login', '_self');
    });
  };

  module.loginController = loginController;
})(window);
