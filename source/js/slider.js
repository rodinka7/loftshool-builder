(function(){
	'use strict';
	
	var counter = 0;

	$(window).on('load', function(){
		var itemPrev = $('.slider__controls-item_prev').find('.slider__img'), 
			itemNext = $('.slider__controls-item_next').find('.slider__img');
		
		if (itemPrev.data('id') === 'work1'){
			$(this).addClass('active');
		};

		if (itemNext.data('id') === 'work3'){
			$(this).addClass('active');
		};
	});

	$('.slider__controls-item_prev').on('click', function(e){
		e.preventDefault();
		slider('down');
	});

	$('.slider__controls-item_next').on('click', function(e){
		e.preventDefault();
		slider('up');
	});

function slider(direction){
			var	slider = $('.slider'), 
			container = slider.find('.slider__controls'),
			imgPrev = container.find('.slider__controls-item_prev').find('.slider__img'),
			imgNext = container.find('.slider__controls-item_next').find('.slider__img'),
			activeImgPrev = imgPrev.filter('.active'),
			activeImgNext = imgNext.filter('.active'),
			display = slider.find('.slider__display').find('.slider__img'),
			text = slider.find('.about-me__header'),
			skills = slider.find('.works__skills-info'),
			reqImgPrev,
			reqImgNext;

		if (counter >= imgPrev.length) {
			counter = 0;
		};
		
		if (direction === 'down'){
			reqImgPrev = imgPrev.eq(counter-1);
			reqImgNext = imgNext.eq(counter+1);
		} else {
			reqImgPrev = imgPrev.eq(counter+1);
			reqImgNext = imgNext.eq(counter-1);
		}

		var	reqImg = imgPrev.eq(counter), 
			name = reqImg.data('name'),
			description = reqImg.data('description'),
			path = reqImg.attr('src');
		

		activeImgPrev.animate({
			'top': '200%'
		},300);
		reqImgPrev.animate({
			'top': '0'
		},300, function() {
			activeImgPrev.removeClass('active').css('top', '0');
			$(this).addClass('active');
			text.text(name);
			skills.text(description);
		});

		activeImgNext.animate({
			'top': '200%'
		},300);
		reqImgNext.animate({
			'top': '0'
		},300, function() {
			activeImgNext.removeClass('active').css('top', '0');
			$(this).addClass('active');
			text.text(name);
			skills.text(description);
		});

		display.fadeOut(function() {
			$(this).attr('src', path).fadeIn();
		});

		counter++;
};
})();