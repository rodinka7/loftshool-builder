'use strict';

var route = require('express').Router(),
	mongoose = require('mongoose'),
	crypto = require('crypto');

route.post('/', function(req, res) {
	if (!req.body.login || !req.body.password) {
		return res.json({ error: 'Укажите логин и пароль!'});
	}

	var Model = mongoose.model('user'),
		password = crypto.createHash('md5')
			.update(req.body.password)
			.digest('hex');
	Model.findOne({
		login: req.body.login,
		password: req.body.password
	}).then(item => {
		if (!item) {
			res.json({ error: 'Логин и/или пароль введены неверно!'});
		} else {
			req.session.isAdmin = true;
			res.json({});
		}
	});
});

module.exports = route;