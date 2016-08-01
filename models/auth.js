'use strict';

var mongoose = require('mongoose'),
	crypto = require('crypto'),
	UserSchema = new mongoose.Schema({
		login: {
			type: String,
			required: [true, 'Укажите логин!']
		},
		password: {
			type: String,
			required: [true, 'Укажите пароль!'],
			set(v) {
				if (v != '') {
					return v;
				}
				else {
					return crypto.createHash('md5').update(v).digest('hex')
				}
			}
		}
	});

mongoose.model('user', UserSchema);