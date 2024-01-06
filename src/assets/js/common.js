$(document).ready(function () {
  $('.main_slick_wrapper').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    draggable: true,
    prevArrow: `.prev_btn_wrapper`,
    nextArrow: `.next_btn_wrapper`
  });


  $(".toggle_header").click(function () {
    if ($("body").hasClass("active_header")) {
      $("body").removeClass("active_header");
    } else {
      $("body").addClass("active_header");
    }
  });
});
