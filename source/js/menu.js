(function(){
'use strict';
$('#head__menu').on('click',function(e){
	e.preventDefault();
	console.log('heyyyyy!!!!!');
	var $this = $(this),
		/*menu = document.getElementById(menu);
		menu.css({'display':'block'});*/
		body = $this.closest('body'),
		block_menu = body.find('#menu');
		
		console.log(body);
		console.log(block_menu);

		block_menu.css({'display':'block'});
});
})();