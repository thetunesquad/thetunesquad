'use strict';

(function(module){
  const inputController = {};

  inputController.init = function() {
    //$('#loading').hide();
    $('.tab-content').hide();
    $('#input').show();
    console.log('we are in the input route');
    $('#search-form').submit(function(e) {
      $('#loading').show();
      page.redirect('/loading');
      e.preventDefault();
      //page('/loading');
    });

    $('#artist-button').on('click', function(e){
      //e.preventDefault();
      $('#input').hide();
      //searchArtist1();
    })
  };

  module.inputController = inputController;
})(window);
