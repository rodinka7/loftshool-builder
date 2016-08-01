'use strict';
$('.admin__content-work').submit(function(e) {
	e.preventDefault();

	var $this = $(this),
		data = new FormData(document.forms.adminForm);

		
	var xhr = new XMLHttpRequest();

	xhr.open('POST', '/work');
	xhr.send(data);
});