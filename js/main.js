$(document).ready(function() {
  $(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false
  });
  $("#move_about").on("click", function() {
    $(".main").moveTo(2);
  });
  $("#move_works").on("click", function() {
    $(".main").moveTo(3);
  });
});
