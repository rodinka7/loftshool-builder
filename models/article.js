'use strict';

var mongoose = require('mongoose'),
	BlogSchema = new mongoose.Schema({
		title: {
			type: String,
			required: [true, 'Укажите заголовок статьи!']
		},
		date: {
			type: String,
			required: [true, 'Укажите дату публикации!']
		},
		body: {
			type: String,
			required: [true, 'Укажите содержимое статьи!']
		}
	});

mongoose.model('post', BlogSchema);