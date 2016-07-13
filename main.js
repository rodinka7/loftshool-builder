'use strict';
var fs = require('fs'),
	express = require('express'),
	app = express();

/*let fs = require('fs');
let express = require('express');
let path = require('path');
let config = require('./data/config.json');
let app = express();

app.use(express.static(path.resolve(config.http.publicRoot)));

app.get('/*', (req, res) => {
	res.setHeader('Content-Type', 'text/html; charset=utf8');
	res.end('it works');
});

app.use((req, res, next) => res.status(404).send('Не удается найти страницу'));

app.use((err, req, res, next) => {
	res.status(500);
	res.render('error', {error: err.message});
	console.log(err.message, err.stack);
});

app.listen(config.http.port, config.http.host, () => {
	let uploadDir = path.resolve(config.http.publicRoot, 'upload');

	if(!fs.existsSync(uploadDir)){
		fs.mkdirSync(uploadDir);
	}
	console.log('Server is up on ' + config.http.host + ' : ' + config.http.port + '!');
})*/

var bodyParser = require('body-parser'),
	mimeMap = {
		'.css': 'text/css',
		'.html': 'text/html',
		'.js': 'text/javascript',
		'.jpg': 'image/jpeg',
		'.png': 'image/png',
		'.gif': 'image/gif',
	};

app.use(bodyParser.json());
app.get('/*', function(req, res){
	res.setHeader('Content-Type', 'text/html; charset=utf8');
	console.log('Получен запрос по адресу: ' + req.url);
	var fileName = './'+req.url;
	if (fs.existsSync(fileName)){
		var content = fs.readFileSync(fileName, {encoding: 'utf8'});
		res.write(content);
	} else {
		var content = fs.readFileSync('./build/404.html', {encoding: 'utf8'});
		res.status(404);
		res.write(content);
	}
	
	res.end();
});

app.post('/save', function(req, res){
	console.log('Поступил пост-запрос', req.body);
	var content = fs.readFileSync('posts.txt', {encoding: 'utf8'}),
		items = JSON.parse(content);
		
	items.push(req.body);
	fs.writeFileSync('posts.txt', JSON.stringify(items));
	res.end();
});

app.listen(9999);

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/portfolio', function(err, db){
	if(err){
		console.error(err);
	} else {
		var blogCollection = db.collection('blog'),
		post = {
			"title!": "Работа с MongoDb",
			"date": "15.07.2016",
			"text": "Как же сложно работать с базами данных! Сложно-сложно! Но у меня получится, непременно!!!"
		};
		blogCollection.insert(post);
	}
});