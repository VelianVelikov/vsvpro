$(document).ready(function () {
  $('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');

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
});
