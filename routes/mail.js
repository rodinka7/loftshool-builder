'use strict';

var route = require('express').Router(),
	nodemailer = require('nodemailer'),
	config = require('../config.json');

route.post('/mail', function(req, res) {
	if (!req.body.name || !req.body.email || !req.body.text) {
		return res.json({ error: 'Укажите данные!'});
	}

	var transporter = nodemailer.createTransport(config.mail.smtp),
		mailOptions = {
			from: config.mail.smtp.auth.user,
			to: 'rodinka7@gmail.com',
			subject: config.mail.subject,
			text: req.body.text.trim().slice(0, 500)
		};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			return res.json({error: error.message});
		}

		res.json({});
	});
});

module.exports = route;