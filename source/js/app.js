(function() {
  'use strict';
  
  var wscroll = $(window).scrollTop(),
      inputBorder = $('.container__input');

  inputBorder.css({'border-color': '#8f9191'}); 

  //Preloader
  $(window).on('load', function () {
    var $preloader = $('#page-preloader');
    
    $preloader.delay(500).fadeOut('slow');
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

  $('#arrow').on('click', function(e){
    e.preventDefault();
    
    var reqScroll = $('.head__table').height();
    console.log(reqScroll);
    $('html, body').animate({
      scrollTop: reqScroll
    },1000); 
  })
  
})();