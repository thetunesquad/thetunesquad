'use strict';

(function(module){
  const aboutController = {};

  aboutController.init = function() {
    $('#playlist').empty();
    $('#query1').empty();
    $('#query2').empty();
    $('.tab-content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
