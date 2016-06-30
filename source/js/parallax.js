'use strict';

$(window).scroll(function(){
	var wScroll = $(window).scrollTop();

	(function(){
		var bg = $('.head__table_background'),
			strafe = wScroll/45,
			transformString = 'transform3D(0, ' + strafe + ', 0)',
			strafeAmount = -strafe + '%';

		console.log(bg);
		bg.css({
			'transform': transformString
		})

	})();
});