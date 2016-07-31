'use strict';

var route = require('express').Router(),
	mongoose = require('mongoose'),
	tech = require('../models/skills.json'); 

require('../models/skills');

route.get('/', function(req, res) {
	var Model = mongoose.model('skills');

	Model.find().then(function(items) {
		var form = items.reduce(function(prev, cur) {
			prev[cur.section] = cur.items.reduce(function(prev, cur) {
				prev[cur.name] = cur.value;
				return prev;
			}, {});
			return prev;
		}, {});
		res.render('admin', {tech: tech, form: form});
	});
});

route.post('/about', function(req, res) {
	var Model = mongoose.model('skills'),
		models = [];

	Object.keys(req.body).map(section => ({
		section: section,
		items: Object.keys(req.body[section]).map(i => ({
			name: i,
			value: req.body[section][i]
		}))
	})).forEach(toSave => models.push(new Model(toSave)));

	if (models.filter(m => m.validateSync()).length) {
		return res.json( {error: 'Не удалось сохранить данные!'});
	}

	Model.remove({}).then(() =>
		Model.insertMany(models).then(() => 
			res.json({ message: 'Сохранено!'})
		)
	); 
});
module.exports = route;