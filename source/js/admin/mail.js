'use strict';

$('#contactForm').submit(function(e) {
	e.preventDefault();

	var $this = $(this),
		data = {
			name: $this.find('input[name="name"]').val(),
			email: $this.find('input[name="email"]').val(),
			text: $this.find('textarea[name="contactMe"]').val()
		}

	var xhr = new XMLHttpRequest();

	xhr.open('POST', '/mail');
	xhr.send(JSON.stringify(data));
});