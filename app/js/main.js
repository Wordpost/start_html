$(function () {
  // menu
  $(document).ready(function(){
    var touch   = $('.icon');
    var menu  = $('.menu');
    $(touch).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });

    $(window).resize(function(){
      var w = $(window).width();
      if(w > 767 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  $(".click-link").on('click', function() {
    $(this).toggleClass('active').next().slideToggle(500);
  });

});

