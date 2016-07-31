'use strict';

var route = require('express').Router(),
	mongoose = require('mongoose');

require('../models/article');

route.post('/blog', function(req, res) {
	var Model = mongoose.model('post'),
		item = new Model({
			title: req.body.itemName,
			date: req.body.itemDate,
			body: req.body.itemBody
		});

	item.save().then(
		i => res.json({ message: 'Запись успешнл добавлена!'}),
		e => {
			var error = Object.keys(e.errors)
				.map(key => e.errors[key].message)
				.join(', ');
			res.json({ error: error});
		});
});

module.exports = route;