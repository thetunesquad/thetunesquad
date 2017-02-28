'use strict';

(function(module){
  const loginController = {};

  loginController.init = function() {
    //$('.tab-content').hide();
    $('#login').show();
    $('#testbutton').on('click', function()
     {
        window.open("/login", "_blank", "width=200,height=100");
    });
  };

  module.loginController = loginController;
})(window);
