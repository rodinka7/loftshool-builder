'use strict';

$('.admin__skills-form').submit(function (e) {
	e.preventDefault();

	var data = {};

	console.log($(this));

	$('.skills__input').each(function() {
		var $this = $(this),
			category = $this.data('category'),
			skill = $this.data('skills');

		if (!(category in data)) {
			data[category] = {};
		}

		data[category][skill] = $this.val();
	});

	var xhr = new XMLHttpRequest();

	xhr.open('POST', '/save');
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');
	xhr.send(JSON.stringify(data));
});
