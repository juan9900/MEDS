$('.btn-more').on('click',function(){
    console.log($(this).parent().siblings())
    const service = $(this).parent().siblings();
    console.log(service);
    $(service).toggleClass('closed');
    $(service).toggleClass('opened');

})