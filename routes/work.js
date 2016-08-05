'use strict';
var fs = require('fs'),
	path = require('path'),
	route = require('express').Router(),
	mongoose = require('mongoose'),
	multiparty = require('multiparty'),
	config = require('../config.json');

require('../models/work');

route.post('/work', function(req, res) {
	var form = new multiparty.Form();

	form.parse(req, function(err, fields, files) {
		if (err) {
			return res.json({ error: err.message || err});
		}

		var Model = mongoose.model('work'),
			item = new Model({
				name: fields.workName,
				tech: fields.workTech,
				link: fields.workLink
			});
		item.save().then(work => {
			var pictures = files.workPicture.filter( f => f.size).map(function(file, key) {
				var newFilePath = path.join('upload', `${work._id}_${key}${path.extname(file.path)}`);

				fs.writeFileSync(path.resolve(config.http.publicRoot, newFilePath), fs.readFileSync(file.path));

				return newFilePath;
			});

			return Model.update({ _id: work._id}, { $pushAll: {pictures: pictures } });
		}, e => {
			throw new Error(Object.keys(e.errors).map(key => e.errors[key].message).join(', '));
		}).then(
			i => res.json({ message: 'Запись успешно добавлена!'}),
			e => res.json({ error: e.message})
		);
	});
});

module.exports = route;
