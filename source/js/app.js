(function() {
  'use strict';

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
  
}
)();