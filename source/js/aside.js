(function() {
	'use strict';

	$('#aside-button').on('click',function(e){
		var $this = $(this),
			wrapper = $this.closest('.blog-wrapper'),
			aside_block = wrapper.find('#aside');
			console.log(aside_block);
		aside_block.animate({'left':'0'},1000);

		aside_block.on('click', function(){ 
			$(this).animate({'left':'-40%'}, 1000);
		});
	});

})();