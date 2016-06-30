(function(){
	'use strict';
	
	var counter = 1;

	$('.slider__controls-item_prev').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.slider__controls-item_prev'),
			images = container.find('.slider__img'),
			activeImg = container.find('.slider__img.active'),
			slider = $this.closest('.slider'),
			display = slider.find('.slider__display').find('.slider__img'),
			text = slider.find('.about-me__header'),
			skills = slider.find('.works__skills-info'); 

		if (counter >= images.length) {
			counter = 0;
		};
		
		var reqImg = images.eq(counter),
			path = reqImg.attr('src');

		activeImg.animate({
			'top': '200%'
		},300);
		reqImg.animate({
			'top': '0'
		},300, function() {
			activeImg.removeClass('active').css('top', '0');
			$(this).addClass('active');
		});

		display.fadeOut(function() {
			$(this).attr('src', path).fadeIn();
		});
		

		counter++;
	});

	$('.slider__controls-item_next').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.slider__controls-item_next'),
			images = container.find('.slider__img'),
			activeImg = container.find('.slider__img.active'),
			display = $this.closest('.slider').find('.slider__display').find('.slider__img'); 

		if (counter >= images.length) {
			counter = 0;
		};
		
		var reqImg = images.eq(counter),
			path = reqImg.attr('src');

		activeImg.animate({
			'top': '-200%'
		},300);
		reqImg.animate({
			'top': '0'
		},300, function() {
			activeImg.removeClass('active').css('top', '0');
			$(this).addClass('active');
		});

		display.fadeOut(function() {
			$(this).attr('src', path).fadeIn();
		});

		counter++;
	});

})();