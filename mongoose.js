'use strict';
// Поднятие сервера
let mongoose = require('mongoose');
let config = require('./config.json');
let options = {
	user: config.db.user,
	pass: config.db.password
};

let host = config.db.host;
let port = config.db.port;
let db = config.db.name;

mongoose.connect('mongodb://${host}:${port}/${db}', options).catch(e => {
	console.error(e);
	throw e;
});

module.exports = mongoose;

// Реализация скиллов
let Schema = mongoose.Schema,
	TechSchema = new Schema({
		section: {
			type: String
		},
		items: {
			type: [{
				name: {
					type: String
				},
				value:{
					type: Number,
					default:0
				}				
			}]
		}
	});
mongoose.mode('tech', TechSchema);