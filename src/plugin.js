/*
 Accordion v1.0
*/
(function ($) {
  $.fn.accordion = function (speed, callback) {
      if (speed === undefined) speed = 400;
      this.children("p").css("display", "none");
      this.children("h2").click(function() {
        var $p = $(this).next("p");
        $p.toggle(speed);
        $(this).parent("div").find("p").not($p).hide(speed);
      });
      return this;
  };
}(jQuery));
