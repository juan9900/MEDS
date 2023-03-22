var waypoint = new Waypoint({
    element: document.body,
    handler: function() {
        $('.service').each(function(){
            $(this).addClass('animate__animated animate__fadeInUp')
        })
    }
  })