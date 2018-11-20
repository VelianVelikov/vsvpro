$(document).ready(function () {
  $('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');

  });

  var square = $('.square');
  var info_box = $('info-box');
  var width = square.width() / 3;

  square.css('height', width);
  info_box.css('height', width);
  info_box.css('margin-top', -width);


  $(window).scroll(function () {
      if ($('header').offset().top == 0){
        $('.arrow').show();
      }
      else {
        $('.arrow').css('display', 'none');
      }
  });


  //                Start back-to-top button jQuery
                $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
                var amountScrolled = 300;

                $(window).scroll(function () {
                    if ($(window).scrollTop() > amountScrolled) {
                        $('a.back-to-top').fadeIn('slow');
                    } else {
                        $('a.back-to-top').fadeOut('slow');
                    }
                });
                $("a.back-to-top").click(function () {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 2000);
                });
//                End back-to-top button jQuery


$( window ).resize(function() {
    var square = $('.square');
    var info_box = $('info-box');
    var width = square.width() / 3;

    square.css('height', width);
    info_box.css('height', width);
    info_box.css('margin-top', -width);
});

});
