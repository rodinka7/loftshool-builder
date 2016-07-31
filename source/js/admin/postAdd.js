'use strict';

$('.admin__content-blog').submit(function(e) {
	e.preventDefault();

	var $this = $(this),
		data = {
			title: $this.find('input[name="title"]').val(),
			date: $this.find('input[name="date"]').val(),
			body: $this.find('textarea[name="body"]').val()
		}

	var xhr = new XMLHttpRequest();

	xhr.open('POST', '/post');
	xhr.send(JSON.stringify(data));
})