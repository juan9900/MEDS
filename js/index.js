const headerServices = $('header');

var waypoint = new Waypoint({
    element: headerServices,
    handler: function(){
        $('.index-heading').addClass('animate__animated animate__backInRight');
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