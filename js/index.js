const headerServices = $("header");
const screenWidth = screen.width;
console.log(screenWidth);

if (screenWidth <= 1600) {
  console.log("available");
  var waypoint = new Waypoint({
    element: headerServices,
    handler: function () {
      $(".index-heading").addClass("animate__animated animate__backInRight");
      $("#btn-video").addClass("animate__animated animate__fadeInUp");
    },
  });

  const sectionResonador = $(".section-resonador");

  var waypoint = new Waypoint({
    element: sectionResonador,
    handler: function () {
      $(sectionResonador).addClass("animate__animated animate__fadeInLeft");
    },
    offset: 1000,
  });

  const sectionUs = $(".section-us");

  var waypoint = new Waypoint({
    element: sectionUs,
    handler: function () {
      $(sectionUs).addClass("animate__animated animate__fadeInRight");
    },
    offset: 1000,
  });

  const sectionBooking = $(".section-booking");

  var waypoint = new Waypoint({
    element: sectionBooking,
    handler: function () {
      $(sectionBooking).addClass("animate__animated animate__fadeInLeft");
    },
    offset: 800,
  });
}

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

let videoReproducing = false;

$(document).ready(function () {
  const videoIndex = $(".index-video").get(0);
  $("#btn-video").on("click", function () {
    if (!videoReproducing) {
      videoIndex.currentTime = 0.0;
      videoIndex.play();
      $(this).text("Detener video");
    } else {
      videoIndex.pause();
      $(this).text("Reproducir video");
    }
    videoReproducing = !videoReproducing;
    $(".video-container").toggleClass("active");
  });
});

$(window).on("resize scroll", function () {
  if ($(".section-booking").isInViewport()) {
    if (!$(".floating-link").hasClass("animate__backOutRight"))
      $(".floating-link").addClass("animate__animated animate__backOutRight");
    console.log("visible");
  } else {
    if ($(".floating-link").hasClass("animate__backOutRight"))
      $(".floating-link")
        .addClass("animate__animated animate__backInRight")
        .removeClass("animate__backOutRight");
    console.log("not visible");
  }
});
