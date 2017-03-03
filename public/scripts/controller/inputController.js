'use strict';

(function(module){
  const inputController = {};

  inputController.init = function() {
    $('.tab-content').hide();
    $('#input').show();
    console.log('we are in the input route');
    $('#search-form').submit(function(e) {
      $('#loading').show();
      page.redirect('/loading');
      e.preventDefault();
    });

    $('#artist-button').on('click', function(e){
      $('#input').hide();
    })
  };

  module.inputController = inputController;
})(window);
