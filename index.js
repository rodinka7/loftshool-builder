'use strict';

var fs = require('fs'),
	path = require('path'),
	express = require('express'),
	config = require('./config.json'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('./mongoose');
	

app.set('views', path.resolve(`./${config.http.publicRoot}`));
app.use(express.static(path.resolve(config.http.publicRoot)));

app.use(bodyParser.json());

// маршруты
app.post('/save', function(req, res) {
	console.log('Поступил POST запрос!', req.body);
	res.end();
});

app.post('/post', function(req, res) {
	console.log('Поступил POST запрос!', req.body);
	res.end();
});

app.post('/work', function(req, res) {
	console.log('Поступил POST запрос!', req.body);
	res.end();
});

app.get('/', function(req, res) {
	res.setHeader('Content-type', 'text/html;charset=utf8');
	res.end('работает!');
});

app.use('/admin', require('./routes/about'));
app.use('/admin', require('./routes/post'));
app.use('/admin', require('./routes/work'));

app.use(function(req, res, next) {
	res.status(404).send('Не удалось найти страницу!');
});

app.use(function(err, req, res, next) {
	res.status(500);
	res.render('error', {error: err.message});
	console.log(err.message, err.stack);
});

app.listen(config.http.port, config.http.host, function() {
	var uploadDir = path.resolve(config.http.publicRoot, 'upload');

	if (!fs.existsSync(uploadDir)) {
		fs.mkdirSync(uploadDir);
	} 

	console.log(`Server is up on ${config.http.host}:${config.http.port}!`);
});
