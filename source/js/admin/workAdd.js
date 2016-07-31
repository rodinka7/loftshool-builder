'use strict';
$('.admin__content-work').submit(function(e) {
	e.preventDefault();

	var $this = $(this),
		data = new FormData($this[0]);
		
	var xhr = new XMLHttpRequest();

	xhr.open('POST', '/work');
	xhr.send(JSON.stringify(data));
});