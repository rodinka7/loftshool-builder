'use strict';

var route = require('express').Router(),
	mongoose = require('../mongoose'),
	tech = require('../models/skills.json');

route.get('/', function(req, res) {
	res.render('index');
});

route.get('/blog.html', function(req, res) {
	var Model = mongoose.model('post');

	Model.find().then(items => {
		res.render('post', {items: items});
	});
});

route.get('/works.html', function(req, res) {
	var Model = mongoose.model('work');

	Model.find().then(items => {
		res.render('works', {items: items});
	});
});

route.get('/about.html', function(req, res) {
	var Model = mongoose.model('skills');

	Model.find().then(items => {
		var form = items.reduce(function(prev, cur) {
			prev[cur.section] = cur.items.reduce(function(prev, cur) {
				prev[cur.name] = cur.value;

				return prev;
			}, {});
			return prev;
		}, {});
		res.render('about', {skills: skills, form: form});
	});
});

module.exports = route;