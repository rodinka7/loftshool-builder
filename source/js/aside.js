'use strict';

$('#aside-button').on('click',function(e){
	var $this = $(this),
		wrapper = $this.closest('.blog-wrapper'),
		aside_block = wrapper.find('#aside');
		console.log(aside_block);
	aside_block.animate({'left':'0'},1000);

	aside_block.on('click', function(){ 
		$(this).animate({'left':'-60%'}, 1000);
	});
});

$(window).scroll(function(){
	var wScroll = $(window).scrollTop(),
		menu = $('.static .aside-wrapper__list'),
		sidebar = $('.static .aside-wrapper__static'),
		stickyStart = sidebar.offset().top,
		menuClone = sidebar.clone(),
		fixedSidebar = $('.fixed-wrapper .aside-wrapper');

	if (wScroll >= stickyStart) {
		if (!fixedSidebar.find('.aside-wrapper__static').length){
			fixedSidebar.append(menuClone);
			menu.hide();
		} 
	} else {
			fixedSidebar.find('.aside-wrapper__static').remove();
			menu.show();
		}
});