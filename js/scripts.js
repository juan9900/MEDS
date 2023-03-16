$('.btn-more').on('click',function(){
    const service = $(this).parent().siblings();
    $(service).toggleClass('closed');
    $(service).toggleClass('opened');

})


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
    
    
    $('.slider-element').each(function(){
        const itemHeight = this.offsetHeight;
        if(itemHeight > maxHeight){
            maxHeight = itemHeight + $('.custom-slider-container').height();
            
        }
        console.log(maxHeight);
       
        $('.wrapper').css('height',maxHeight);
        
    })

    $('.custom-slider-container').height();


    $('#next').on('click',slideNext);
    
    $('#prev').on('click',slidePrev);
    


  //Select the image to visualize in the gallery
  const miniatures = $('.gallery-miniature');
  $(miniatures).each(function(){
    $(this).on('click',function(){
        $(miniatures).removeClass('active');
        $(this).addClass('active');
        const originalPath = $(this).attr('src');
        console.log("🚀 ~ file: scripts.js:80 ~ $ ~ originalPath:", originalPath)
        const replacedPath = originalPath.replace(/sm/g,'lg');
        console.log("🚀 ~ file: scripts.js:82 ~ $ ~ replacedPath:", replacedPath)
        $('.gallery-principal-img').fadeOut(function(){
            $('.gallery-principal-img').attr('src',replacedPath);
        });
        $('.gallery-principal-img').fadeIn();
        
    })
  })
});