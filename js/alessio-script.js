/*

/* HTML document is loaded. DOM is ready. 
-----------------------------------------*/
$(document).ready(function () {
  /* Mobile menu */
  $('.mobile-menu-icon').click(function () {
    $('.alessio-left-nav').slideToggle();
  });

  /* Close the widget when clicked on close button */
  $('.alessio-content-widget .fa-times').click(function () {
    $(this)
      .parent()
      .slideUp(function () {
        $(this).hide();
      });
  });

  $(function () {
    var nav = $('.alessio-sidebar');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        nav.addClass('fixed-nav');
      } else {
        nav.removeClass('fixed-nav');
      }
    });
  });
});
