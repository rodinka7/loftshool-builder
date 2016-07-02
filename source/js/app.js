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

  // Создание флипа
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

  //Скролл на один экран
  $('#arrow').on('click', function(e){
    e.preventDefault();
    
    var reqScroll = $('.head__table').height();
    console.log(reqScroll);
    $('html, body').animate({
      scrollTop: reqScroll
    },1000); 
  })
  //ВАлидация формы feedback
  $('#submit').on('click', function(){

    var form = document.forms.feedback;
    validate(form);                         
  })

  function validate(form){
    var
        success = $('#success'),
        fail = $('#fail'),
        valid = true;

    if ((form.elements.name.value === '') || 
      (form.elements.email.value === '') || 
    (form.elements.textarea.value === '')) {
        fail.css({'visibility': 'visible'}, 1000);
        valid = false;
    
    } else {
      success.css({'visibility': 'visible'},1000);
      valid = true;
    }
    return valid;    
  }
  
  $('.formPopup__close').on('click', function(){
    var $this = $(this),
      popup = $this.closest('.formPopup');

    popup.css({'visibility': 'hidden'});
  })

  $('#reset').on('click',function(){
    console.log($(this));
    document.forms.feedback.reset();
  })

  //Валидаций формы авторизации
  $('.loginMe').on('click', function(){
    var loginForm = document.forms.loginForm;
    validateForm(loginForm);
  });

  function validateForm(form){
    var robot = $('#robot'),
        failLogin = $('#failLogin'),
        success = $('#success'),
        valid = false;

    if ((form.elements.login.value === '') || (form.elements.password.value === '')){
        
        failLogin.css({'visibility': 'visible'},1000);
        valid = false;          
       
    } else if (form.elements.checkbox.checked === false){
       
        robot.css({'visibility': 'visible'},1000);
        valid = false;
        document.forms.loginForm.reset();
    } else if (form.elements.yes.checked === false) {

        robot.css({'visibility': 'visible'},1000);
        valid = false;
        document.forms.loginForm.reset();
    } else {
        success.css({'visibility': 'visible'});
        valid = true;
        document.forms.loginForm.reset();
    }

    return valid; 
  }  
})();