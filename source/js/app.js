(function() {
  'use strict';

  //Preloader
  $(window).on('load', function () {
    var $preloader = $('#page-preloader');
    
    $preloader.delay(1000).fadeOut('slow');
  });
  //Preloader-end

  $('.autorize-link').on('click', function(e) {
  	e.preventDefault();

  	var flipper = $(this).closest('.flipper'),
  		wrapper = $(this).closest('.wrapper-for-animation.hover');
	wrapper.css({'transform' : 'rotateY(180deg)'});  	
  	flipper.css({'transform' : 'rotateY(180deg)'});
})
  
}
  /*setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);*/
)();