$(".slider-element").eq(0).addClass("prev");
$(".slider-element").eq(1).addClass("active");
$(".slider-element").eq(2).addClass("next");

$(".slider-element:gt(2)").addClass("hidden-img");

let activeElementIndex = 1;

//Insert slider indicators based in amount of slide elements

const indicators = $(".slider-element").length;
console.log(indicators);

for (let i = 0; i < indicators; i++) {
  $(".slider-indicators").append(`<div class="slider-indicator"></div>`);
}
const sliderIndicators = $(".slider-indicator");

function slideNext() {
  // $(".slider-element.hidden-img:last")
  //   .removeClass("hidden-img")
  //   .addClass("prev");
  const $sliderElements = $(".slider-element");
  const $activeElement = $sliderElements.eq(activeElementIndex);
  const $nextElement = $sliderElements.eq(
    (activeElementIndex + 1) % $sliderElements.length
  );

  const $nextNextElement = $sliderElements.eq(
    (activeElementIndex + 2) % $sliderElements.length
  );
  const $prevElement = $sliderElements.eq(
    (activeElementIndex - 1) % $sliderElements.length
  );

  // if (activeElementIndex === 3 % $sliderElements.length) {
  //   $(".hidden-img.lapped:first").removeClass("lapped");
  // }
  $sliderElements.removeClass("active prev next");

  $nextElement.addClass("active");
  $activeElement.addClass("prev");
  $prevElement.addClass("hidden-img");
  $nextNextElement.addClass("next").removeClass("hidden-img");

  activeElementIndex = (activeElementIndex + 1) % $sliderElements.length;
  $(sliderIndicators).removeClass("active");
  sliderIndicators.eq(activeElementIndex).addClass("active");
}

function slidePrev() {
  // const $sliderElements = $(".slider-element");
  // const $activeElement = $sliderElements.eq(activeElementIndex);
  // const $nextElement = $sliderElements.eq(
  //   (activeElementIndex + 1 + $sliderElements.length) % $sliderElements.length
  // );
  // const $prevElement = $sliderElements.eq(
  //   (activeElementIndex - 1) % $sliderElements.length
  // );
  // $sliderElements.removeClass("prev active next");
  // $activeElement.addClass("next");
  // $nextElement.addClass("prev");
  // $prevElement.addClass("active");
  // activeElementIndex =
  //   (activeElementIndex - 1 + $sliderElements.length) % $sliderElements.length;
  // $(sliderIndicators).removeClass("active");
  // sliderIndicators.eq(activeElementIndex).addClass("active");
  const $sliderElements = $(".slider-element");
  const $activeElement = $sliderElements.eq(activeElementIndex); //1
  const $nextElement = $sliderElements.eq(
    (activeElementIndex + 5) % $sliderElements.length
  ); //0
  const $prevElement = $sliderElements.eq(
    (activeElementIndex + 1) % $sliderElements.length
  ); //2

  const $nextNextElement = $sliderElements.eq(
    (activeElementIndex + 4) % $sliderElements.length
  ); //3
  console.log((activeElementIndex + 4) % 6);
  $sliderElements.removeClass("active prev next");

  $nextElement.addClass("active");
  $activeElement.addClass("next");
  $prevElement.addClass("hidden-img");
  $nextNextElement.addClass("prev").removeClass("hidden-img");

  activeElementIndex = (activeElementIndex - 1) % $sliderElements.length;
  $(sliderIndicators).removeClass("active");
  sliderIndicators.eq(activeElementIndex).addClass("active");
  console.log(`New index: ${activeElementIndex}`);
}

$(document).ready(function () {
  let maxHeight = 0;
  sliderIndicators.eq(1).addClass("active");

  $(".custom-slider-container").height();

  $("#next").on("click", slideNext);

  $("#prev").on("click", slidePrev);

  const images = [
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-1.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-2.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-3.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-4.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-5.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-6.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-7.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-8.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-9.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-10.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-11.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-12.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-13.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-14.webp" },
    { src: "/assets/img/galeria-meds-md/galeria-meds-md-15.webp" },
  ];

  const loader = new createjs.LoadQueue();
  loader.loadManifest(images);
  loader.on("complete", handleComplete);

  function handleComplete() {
    console.log("Images loaded.");
    // You can now use the images in your application
  }
  //Select the image to visualize in the gallery
  const miniatures = $(".gallery-miniature");
  $(miniatures).each(function () {
    $(this).on("click", function () {
      $(miniatures).removeClass("active");
      $(this).addClass("active");
      const originalPath = $(this).attr("src");

      const replacedPath = originalPath.replace(/sm/g, "md");

      const galleryBigImage = $(".gallery-principal-img");
      $(galleryBigImage).attr("src", replacedPath);
    });
  });
});
