const navPos = $('#navbar').position().top || 150;

$(document).on('scroll', function() {
  if ($(this).scrollTop() >= navPos) {
    if (!$('navbar').hasClass('navbar-fixed-top')) {
      $('#navbar').addClass('navbar-fixed-top');
    }
  }
  if ($(this).scrollTop() < navPos) {
    $('#navbar').removeClass('navbar-fixed-top');
  }
});

