(function(){
'use strict';
$('#menu_checkbox').on('change',function(e){
	e.preventDefault();
	console.log('heyyyyy!!!!!');
	var $this = $(this),
		body = $this.closest('body'),
		block_menu = body.find('#menu');
		
		block_menu.css({'display':'block'});
});
})();