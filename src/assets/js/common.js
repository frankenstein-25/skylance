$(document).ready(function () {
  $(".toggle_header").click(function () {
    if ($("body").hasClass("active_header")) {
      $("body").removeClass("active_header");
    } else {
      $("body").addClass("active_header");
    }
  });
});
