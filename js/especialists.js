$(document).ready(function(){
 $('.doctor-plus-btn').on('click',function(){
   const infoContainer = $(this).parent().siblings();
   $(infoContainer).toggleClass('active');

if($(this).hasClass('active')){
    $(this).removeClass('turn active').addClass('turnCounter');
}else{
    $(this).addClass('turn active').removeClass('turnCounter');
}
})

})