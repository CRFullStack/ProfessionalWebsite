$(function() {
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

  var headerImg = $("#mastTmg");
  headerImg.bind("load", function() {
    $(this).fadeIn("slow");
  });
});
