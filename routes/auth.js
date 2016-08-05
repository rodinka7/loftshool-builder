'use strict';

var mongoose = require('mongoose'),
	readline = require('readline'),
	rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	}),
	login: '',
	password: '';

rl.question('Логин: ', answer => {
	login = answer;

	rl.question('Пароль: ', answer: => {
		password = answer;
		rl.close();
	});
});

rl.on('close', function(){
	require('./models/auth');

	var User = mongoose.model('user'),
		adminUser = new User({
			login: login,
			password: password
		});

	User.findOne({ login: login}).then( u => {
		if (u) {
			throw new Error('Такой пользователь уже существует!');
		}

		return adminUser.save();
	}).then(
		u => console.log('ok!'),
		e => console.error(e.message)
	).then(function() {
		process.exit(0)
	});
});
