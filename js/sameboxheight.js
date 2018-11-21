(function($) {
  $.fn.sameBoxHeight = function(options) {
    var opts = $.extend({}, $.fn.sameBoxHeight.defaults, options);

    if ($(window).width() >= opts.break) {
      h1 = this.height();
      h2 = opts.box.height();
      if (h1 < h2) {
        this.height(h2);
      } else {
        opts.box.height(h1);
      }
    } else {
      this.css("height", "auto");
      opts.box.css("height", "auto");
    }

    if (opts.resize) {
      var x = this;
      $(window).resize(function() {
        x.sameBoxHeight({box: opts.box, resize: false});
      });
    }
    return this;
  };

  $.fn.sameBoxHeight.defaults = {
    break: 768,
    resize: true
  };
}(jQuery));
