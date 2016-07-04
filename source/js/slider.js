(function(){
	'use strict';
	
	var counter = 0;

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
			path = reqImg.attr('src');
		

		activeImgPrev.animate({
			'top': '200%'
		},300);
		reqImgPrev.animate({
			'top': '0'
		},300, function() {
			//var name = $(this).data('name'),
			//	description = $(this).data('description');

			activeImgPrev.removeClass('active').css('top', '0');
			$(this).addClass('active');
			
			//text.text(name);
			//skills.text(description);

		});

		activeImgNext.animate({
			'top': '200%'
		},300);
		reqImgNext.animate({
			'top': '0'
		},300, function() {
			var name = $(this).data('name'),
				description = $(this).data('description');

			activeImgNext.removeClass('active').css('top', '0');
			$(this).addClass('active');

			text.text(name);
			skills.text(description);
		});

		display.fadeOut(function() {
			$(this).attr('src', path).fadeIn();
		});

		/*if(counter === 0){
			text.text('1. cайт школы Loftschool');
			skills.text('html, css, javascript, php, node.js');
		} else if (counter === 1){
			text.text('2. cайт школы онлайн образования');
			skills.text('html, css, javascript, php, gulp');
		} else if (counter === 2){
			text.text('3. cайт стоматологической клиники "Denta"');
			skills.text('html, css, javascript, node.js');
		} else {
			text.text('4. cайт студии танца "Мечта"');
			skills.text('html, css, javascript, node.js, gulp')
		}*/

		counter++;
};
})();