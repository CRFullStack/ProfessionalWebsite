$(function() {
  var hasBeenTrigged = false;
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 100 && !hasBeenTrigged) {
      // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
      alert("You've scrolled 100 pixels.");
      hasBeenTrigged = true;
    }
  });
  window.onscroll = () => {
    var scroll = $(window).scrollTop();
    var nav = $(".navbar");
    var header = $(".masthead");
    if (scroll > header.height()) {
      nav.removeClass("nav-start").addClass("nav-finish");
    } else {
      nav.removeClass("nav-finish").addClass("nav-start");
    }
  };
});
