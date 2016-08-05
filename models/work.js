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
WorkSchema.statics.add = function (name, tech, link, pictures) {
  return new this({
    slug: getSlug(name),
    name: name,
    tech: tech,
    link: link,
    pictures: pictures
  }).save();
};

WorkSchema.statics.getAll = function () {
  return this.find({});
};
mongoose.model('work', WorkSchema);
