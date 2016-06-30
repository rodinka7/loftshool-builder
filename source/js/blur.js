'use strict';

$(document).ready(function(){
	blur();
});
$(window).resize(function(){
	blur();
});

function blur(){
	var imgWidth = $('.about__review').width(),
	blur = $('.blur'),
	wrapper = $('.about__review'),
	posTop = wrapper.offset().top - blur.offset().top,
	posLeft = wrapper.offset().left - blur.offset().left;

	blur.css({
		'background-size': imgWidth +'px' +' '+'auto',
		'background-position': posLeft + 'px' + ' ' + posTop + 'px'
	});
}