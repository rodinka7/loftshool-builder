$(window).scroll(function(){
	var wScroll = $(window).scrollTop();

	(function(){
		var bg = $('.head__table_background'),
			bgText = $('.bg-img'),
			user = $('.block-wrapper');
			
		slideIt(bg, wScroll / 45);
		slideIt(bgText, wScroll / 30);
		slideIt(user, wScroll / 3);

		function slideIt(block, strafeAmount){
			var strafe = -strafeAmount + '%',
				transformString = 'translate3d(0,' + strafe + ',0)';

			block.css({
				'transform': transformString
			})
		}
		

	})();
});