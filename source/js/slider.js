(function(){
	'use strict';
	
	var counter = 0;


	$('.slider__controls-item_prev').on('click', function(e){
		e.preventDefault();
		sliderWork('down');
	});

	$('.slider__controls-item_next').on('click', function(e){
		e.preventDefault();
		sliderWork('up');
	});

function sliderWork(direction){
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

		if (counter >= imgPrev.length-1) {
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
			console.log(counter);
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
			console.log(counter);
			console.log($(this));
		});

		display.fadeOut(function() {
			$(this).attr('src', path).fadeIn();
		});

		counter++;
		console.log(counter);
};

})();