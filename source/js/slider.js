(function(){
	'use strict';
	
	var counter = 0;

	$('.slider__controls-item_prev').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.slider__controls'),
			imgPrev = container.find('.slider__controls-item_prev').find('.slider__img'),
			imgNext = container.find('.slider__controls-item_next').find('.slider__img'),
			activeImgPrev = imgPrev.filter('.active'),
			activeImgNext = imgNext.filter('.active'),
			slider = $this.closest('.slider'),
			display = slider.find('.slider__display').find('.slider__img'),
			text = slider.find('.about-me__header'),
			skills = slider.find('.works__skills-info'); 

		if (counter >= imgPrev.length) {
			counter = 0;
		};
	
		var reqImgPrev = imgPrev.eq(counter-1),
			reqImgNext = imgNext.eq(counter+1),
			reqImg = imgPrev.eq(counter), 
			path = reqImg.attr('src');
		

		activeImgPrev.animate({
			'top': '200%'
		},300);
		reqImgPrev.animate({
			'top': '0'
		},300, function() {
			activeImgPrev.removeClass('active').css('top', '0');
			$(this).addClass('active');
		});

		activeImgNext.animate({
			'top': '200%'
		},300);
		reqImgNext.animate({
			'top': '0'
		},300, function() {
			activeImgNext.removeClass('active').css('top', '0');
			$(this).addClass('active');
		});

		display.fadeOut(function() {
			$(this).attr('src', path).fadeIn();
		});

		if(counter === 0){
			text.text('cайт школы Loftschool');
			skills.text('html, css, javascript, php, node.js');
		} else if (counter === 1){
			text.text('cайт портфолио');
			skills.text('html, css, javascript, php, gulp');
		} else if (counter === 2){
			text.text('cайт стоматологической клиники "Denta"');
			skills.text('html, css, javascript, node.js');
		} else {
			text.text('cайт студии танца "Мечта"');
			skills.text('html, css, javascript, node.js, gulp')
		}

		counter++;
	});

$('.slider__controls-item_next').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.slider__controls'),
			imgPrev = container.find('.slider__controls-item_prev').find('.slider__img'),
			imgNext = container.find('.slider__controls-item_next').find('.slider__img'),
			activeImgPrev = imgPrev.filter('.active'),
			activeImgNext = imgNext.filter('.active'),
			slider = $this.closest('.slider'),
			display = slider.find('.slider__display').find('.slider__img'),
			text = slider.find('.about-me__header'),
			skills = slider.find('.works__skills-info'); 

		if (counter >= imgPrev.length) {
			counter = 0;
		};
	
		var reqImgPrev = imgPrev.eq(counter-1),
			reqImgNext = imgNext.eq(counter+1),
			reqImg = imgPrev.eq(counter), 
			path = reqImg.attr('src');
		

		activeImgPrev.animate({
			'top': '200%'
		},300);
		reqImgPrev.animate({
			'top': '0'
		},300, function() {
			activeImgPrev.removeClass('active').css('top', '0');
			$(this).addClass('active');
		});

		activeImgNext.animate({
			'top': '200%'
		},300);
		reqImgNext.animate({
			'top': '0'
		},300, function() {
			activeImgNext.removeClass('active').css('top', '0');
			$(this).addClass('active');
		});

		display.fadeOut(function() {
			$(this).attr('src', path).fadeIn();
		});
		
		if(counter === 0){
			text.text('cайт школы Loftschool');
			skills.text('html, css, javascript, php, node.js');
		} else if (counter === 1){
			text.text('cайт портфолио');
			skills.text('html, css, javascript, php, gulp');
		} else if (counter === 2){
			text.text('cайт стоматологической клиники "Denta"');
			skills.text('html, css, javascript, node.js');
		} else {
			text.text('cайт студии танца "Мечта"');
			skills.text('html, css, javascript, node.js, gulp')
		}

		counter++;
	});

})();