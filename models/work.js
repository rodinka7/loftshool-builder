'use strict';
var mongoose = require('mongoose'),
	WorkSchema = new mongoose.Schema({
		name: {
			type: String,
			required: [true, 'Укажите имя проетка!']
		},
		tech: {
			type: String,
			required: [true, 'Укажите используемые технологии!']
		},
		link: {
			type: String,
			required: [true, 'Укажите ссылку на проект!']
		},
		pictures: {
			type: [String]
		}
	});
mongoose.model('work', WorkSchema);
