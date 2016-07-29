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
	xhr.send(JSON.stringify(data));

	/*$.ajax({
		url: 'admin/skills',
		data: JSON.stringify(data),
		type: 'POST',
		contentType: 'application/json',
		success: function() {
			alert('Данные успешно отправлены на сервер!');
		},
		error: function(xhr, str) {
			alert('Возникла ошибка: ' + xhr.responseCode);
		}
	});*/
});
