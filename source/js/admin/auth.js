 'use strict';

 $('.container-autorization__form').submit(function (e) {
	e.preventDefault();

	var $this = $(this);

	var data = {
	  login: $this.find('input[name="login"]').val(),
	  password: $this.find('input[name="password"]').val(),
	  ishuman: $this.find('input[name="checkbox"]:checked').val(),
	  norobot: $this.find('input[name="yes"]:checked').val()
	};

	var xhr = new XMLHttpRequest();

	xhr.open('POST', '/auth');
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');
	xhr.send(JSON.stringify(data));
});