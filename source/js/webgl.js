$(document).ready(function() {
	try {
		$('body').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
		});
		$('.wrapper').ripples({
			resolution: 128,
			dropRadius: 10, //px
			perturbance: 0.04,
			interactive: false
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
	
	// Automatic drops
	setInterval(function() {
		var $el = $('.wrapper');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);
});