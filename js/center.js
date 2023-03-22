$('.slider-element').eq(0).addClass('prev');
$('.slider-element').eq(1).addClass('active');
$('.slider-element').eq(2).addClass('next');
let activeElementIndex = 1;
const sliderIndicators = $('.slider-indicator');

function slideNext() {
  const $sliderElements = $('.slider-element');
  const $activeElement = $sliderElements.eq(activeElementIndex);
  const $nextElement = $sliderElements.eq((activeElementIndex + 1) % $sliderElements.length);
  const $prevElement = $sliderElements.eq((activeElementIndex - 1) % $sliderElements.length);
  $sliderElements.removeClass('prev active next');
  $activeElement.addClass('prev');
  $nextElement.addClass('active');
  $prevElement.addClass('next');
  activeElementIndex = (activeElementIndex + 1) % $sliderElements.length;
  $(sliderIndicators).removeClass('active');
  sliderIndicators.eq(activeElementIndex).addClass('active');

}

function slidePrev() {
    const $sliderElements = $('.slider-element');
    const $activeElement = $sliderElements.eq(activeElementIndex);
    const $nextElement = $sliderElements.eq((activeElementIndex + 1 + $sliderElements.length) % $sliderElements.length);
    const $prevElement = $sliderElements.eq((activeElementIndex - 1) % $sliderElements.length);
    $sliderElements.removeClass('prev active next');
    $activeElement.addClass('next');
    $nextElement.addClass('prev');
    $prevElement.addClass('active');
    activeElementIndex = (activeElementIndex - 1 + $sliderElements.length) % $sliderElements.length;
    $(sliderIndicators).removeClass('active');
    sliderIndicators.eq(activeElementIndex).addClass('active');

  }
  





$( document ).ready(function() {
    let maxHeight = 0;
    sliderIndicators.eq(1).addClass('active');
    
    


    $('.custom-slider-container').height();


    $('#next').on('click',slideNext);
    
    $('#prev').on('click',slidePrev);
    

    const images = [
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-1.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-2.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-3.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-4.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-5.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-6.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-7.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-8.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-9.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-10.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-11.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-12.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-13.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-14.webp'},
        {src: '/assets/img/galeria-meds-md/galeria-meds-md-15.webp'},

      ];
      
      const loader = new createjs.LoadQueue();
      loader.loadManifest(images);
      loader.on("complete", handleComplete);
      
      function handleComplete() {
        console.log("Images loaded.");
        // You can now use the images in your application
      }
      //Select the image to visualize in the gallery
      const miniatures = $('.gallery-miniature');
      $(miniatures).each(function(){
        $(this).on('click',function(){
            $(miniatures).removeClass('active');
            $(this).addClass('active');
            const originalPath = $(this).attr('src');
            
            const replacedPath = originalPath.replace(/sm/g,'md');
            
            const galleryBigImage = $('.gallery-principal-img');
            $(galleryBigImage).attr('src',replacedPath);
            
        })
      })

  


});