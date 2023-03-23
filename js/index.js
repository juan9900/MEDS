const headerServices = $('header');

var waypoint = new Waypoint({
    element: headerServices,
    handler: function(){
        $('.index-heading').addClass('animate__animated animate__backInRight');
        $('#btn-video').addClass('animate__animated animate__fadeInUp')
    }
})



const sectionResonador = $('.section-resonador');

var waypoint = new Waypoint({
    element: sectionResonador,
    handler: function() {
        $(sectionResonador).addClass('animate__animated animate__fadeInLeft');
        console.log('holaS');
    },
    offset: 1000,
  })

const sectionUs = $('.section-us');

var waypoint = new Waypoint({
    element: sectionUs,
    handler: function() {
        $(sectionUs).addClass('animate__animated animate__fadeInRight');
        console.log('holaS');
    },
    offset: 1000,
  })

  const sectionBooking = $('.section-booking');

var waypoint = new Waypoint({
    element: sectionBooking,
    handler: function() {
        $(sectionBooking).addClass('animate__animated animate__fadeInLeft');
        console.log('holaS');
    },
    offset: 800,
  })

  let videoReproducing = false;

$(document).ready(function(){

    console.log(screen.width)

    const videoIndex = $('.index-video').get(0);
    $('#btn-video').on('click',function(){
        console.log(videoReproducing)
        
        if(!videoReproducing){
            videoIndex.currentTime = 0.00;
            videoIndex.play()
            $(this).text('Detener video');
        }else{
            videoIndex.pause();
            $(this).text('Reproducir video');
        }
        videoReproducing = !videoReproducing;
        $('.video-container').toggleClass('active');
        
    })
})