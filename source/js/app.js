(function() {
  'use strict';
  var wscroll = $(window).scrollTop();

  //Preloader
  $(window).on('load', function () {
    var $preloader = $('#page-preloader');
    
    $preloader.delay(1000).fadeOut('slow');
  });
  //Preloader-end

  $('#autorize-link').on('click', function(e) {
  	e.preventDefault();

  	var $this = $(this),
        transform = document.getElementById('transform');
    transform.classList.toggle('hover');	
  });
  
  $('#main').on('click', function(e){
      e.preventDefault();

      var $this = $(this),
          transform = document.getElementById('transform');
      transform.classList.toggle('hover');      
  });
  

  //SVG Realization
  var svg = $('.circles'),
      svgPos = $('.about-me__skills').offset().top,
      windowMargin = $(window).height()/3,
      startAnimate = wscroll - svgPos + windowMargin,
      pixelsElapsed = svgPos - wscroll,
      percentElapsde = Math.ceil(pixelsElapsed / windowMargin),
      persentsDraw = 1200/100*percentElapsde;

   if (startAnimate  >= 0){
        if(persentsDraw>0){
      svg.css({
        'stroke-dashoffset': persentsDraw
      });
    }
   }
}

)();