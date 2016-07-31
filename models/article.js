'use strict';

var mongoose = require('mongoose'),
	BlogSchema = new mongoose.Schema({
		title: {
			type: String,
			required: [true, 'Укажите заголовок статьи!']
		},
		body: {
			type: String,
			required: [true, 'Укажите содержимое статьи!']
		},
		date: {
			type: String,
			required: [true, 'Укажите дату публикации!']
		}
	});

mongoose.model('post', BlogSchema);