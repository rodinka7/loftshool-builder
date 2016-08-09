'use strict';

var route = require('express').Router(),
	mongoose = require('mongoose');

require('../models/article');

route.post('/post', function(req, res) {
	var Model = mongoose.model('post'),
		item = new Model({
			title: req.body.title,
			date: req.body.date,
			body: req.body.body
		});

	item.save().then(
		i => res.json({ message: 'Запись успешно добавлена!'}),
		e => {
			var error = Object.keys(e.errors)
				.map(key => e.errors[key].message)
				.join(', ');
			res.json({ error: error});
		});
});

module.exports = route;