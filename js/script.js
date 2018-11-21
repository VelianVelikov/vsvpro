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

  // i substituted 7px becouse this is the width of the scrollbar
  if ($(window).width() > 1017){
    console.log('desktop');

    $ (function () {
      var biggest = 0;
      if ($ ('section.tile:nth-child(1) .second-wrapper').height() > biggest){
        biggest = $ ('section.tile:nth-child(1) .second-wrapper');
      }
      if ($ ('section.tile:nth-child(2) .second-wrapper').height() > biggest){
        biggest = $ ('section.tile:nth-child(2) .second-wrapper');
      }
      if ($ ('section.tile:nth-child(3) .second-wrapper').height() > biggest){
        biggest = $ ('section.tile:nth-child(3) .second-wrapper');
      }

      $ ('section.tile:nth-child(1) .second-wrapper'). sameBoxHeight ({
        box: biggest
      });
      $ ('section.tile:nth-child(2) .second-wrapper'). sameBoxHeight ({
        box: biggest
      });
      $ ('section.tile:nth-child(3) .second-wrapper'). sameBoxHeight ({
        box: biggest
      });

    });
  }
  else if ($(window).width() > 760){
    console.log('tablet');

    $ (function () {
      var biggest = 0;
      if ($ ('section.tile:nth-child(1) .second-wrapper').height() > biggest){
        biggest = $ ('section.tile:nth-child(1) .second-wrapper');
      }
      if ($ ('section.tile:nth-child(2) .second-wrapper').height() > biggest){
        biggest = $ ('section.tile:nth-child(2) .second-wrapper');
      }

      $ ('section.tile:nth-child(1) .second-wrapper'). sameBoxHeight ({
        box: biggest
      });
      $ ('section.tile:nth-child(2) .second-wrapper'). sameBoxHeight ({
        box: biggest
      });

    });
  }
  else {
    console.log('mobile');
  }



$(window).resize(function () {
  $ ('section.tile:nth-child(1) .second-wrapper').css('height', 'auto');
  $ ('section.tile:nth-child(2) .second-wrapper').css('height', 'auto');
  $ ('section.tile:nth-child(3) .second-wrapper').css('height', 'auto');

  if ($(window).width() > 1017){
    console.log('desktop');

    var biggest = 0;
    if ($ ('section.tile:nth-child(1) .second-wrapper').height() > biggest){
      biggest = $ ('section.tile:nth-child(1) .second-wrapper');
    }
    if ($ ('section.tile:nth-child(2) .second-wrapper').height() > biggest){
      biggest = $ ('section.tile:nth-child(2) .second-wrapper');
    }
    if ($ ('section.tile:nth-child(3) .second-wrapper').height() > biggest){
      biggest = $ ('section.tile:nth-child(3) .second-wrapper');
    }

    $ ('section.tile:nth-child(1) .second-wrapper'). sameBoxHeight ({
      box: biggest
    });
    $ ('section.tile:nth-child(2) .second-wrapper'). sameBoxHeight ({
      box: biggest
    });
    $ ('section.tile:nth-child(3) .second-wrapper'). sameBoxHeight ({
      box: biggest
    });
  }
  else if ($(window).width() > 760){

    console.log('tablet');

    var biggest = 0;
    var auto = 'auto';
    if ($ ('section.tile:nth-child(1) .second-wrapper').height() > biggest){
      biggest = $ ('section.tile:nth-child(1) .second-wrapper');
    }
    if ($ ('section.tile:nth-child(2) .second-wrapper').height() > biggest){
      biggest = $ ('section.tile:nth-child(2) .second-wrapper');
    }

    $ ('section.tile:nth-child(1) .second-wrapper'). sameBoxHeight ({
      box: biggest
    });
    $ ('section.tile:nth-child(2) .second-wrapper'). sameBoxHeight ({
      box: biggest
    });
    $ ('section.tile:nth-child(2) .second-wrapper'). sameBoxHeight ({
      box: auto
    });
  }
  else {
    console.log('mobile');
  }

  });

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
