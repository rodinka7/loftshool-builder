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

BlogSchema.statics.add = function (title, date, text) {
  return new this({
    hash: getSlug(title),
    title: title,
    date: date,
    text: text
  }).save();
};

BlogSchema.statics.getAll = function () {
  return this.find({});
};

mongoose.model('post', BlogSchema);