'use strict';

var mongoose = require('mongoose'),
	config = require('./config.json'),
	options = {
		user: config.db.user,
		pass: config.db.password
	},
	host = config.db.host,
	port = config.db.port,
	db = config.db.name;

// connect to mongo function
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portfolio', options)
	.catch(function(e) {
		console.error(e);
		throw e;
	});

module.exports = mongoose;