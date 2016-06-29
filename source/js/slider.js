(function(){
	'use strict';
	var counter = 2;

	$('.slider__controls-item_prev').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.slider__controls-item_prev'),
			images = container.find('.slider__img'),
			activeImg = container.find('.slider__img.active');

		if (counter >= images.length) {
			counter = 0;
		};
		
		var reqImg = images.eq(counter);

		activeImg.animate({
			'top': '200%'
		},300);
		reqImg.animate({
			'top': '0'
		},300, function() {
			activeImg.removeClass('active').css('top', '0');
			$(this).addClass('active');
		});

		counter++;
	});

})();