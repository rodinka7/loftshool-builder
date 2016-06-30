(function(){
	'use strict';
	
	$('#menu_checkbox').on('change',function(e){
		e.preventDefault();
		console.log('heyyyyy!!!!!');
		var $this = $(this),
			body = $this.closest('body'),
			block_menu = body.find('#menu');
	
		if (!block_menu.hasClass('menu-opened')) {
			block_menu.addClass('menu-opened');
		} else {
			block_menu.removeClass('menu-opened');
		}

	});
})();