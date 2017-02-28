'use strict';

(function(module){
  const loginController = {};

  loginController.init = function() {
    //$('.tab-content').hide();
    $('#login').show();
    $('#testbutton').on('click', function()
     {
      window.open('/login', '_self');
    });
  };

  module.loginController = loginController;
})(window);
