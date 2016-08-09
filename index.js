'use strict';

var fs = require('fs'),
	path = require('path'),
	express = require('express'),
	jade = require('jade'),
	app = express(),
	config = require('./config.json'),
	mongoose = require('./mongoose'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	MongoStore = require('connect-mongo')(session);

app.use(session({
	secret: 'loftschool',
	saveUninitialized: false,
	resave: false,
	store: new MongoStore({mongooseConnection: mongoose.connection})
}))

app.set('view engine', 'jade');	

app.set('views', path.resolve(`./${config.http.publicRoot}`));
app.use(express.static(path.resolve(config.http.publicRoot)));

app.use(bodyParser.json());

// маршруты
app.use('/save', require('./routes/about'));
//app.use('/post', require('./routes/post'));
app.use('/work', require('./routes/work'));
app.use('/', require('./routes/main'));
app.use('/mail', require('./routes/mail'));
app.use('/auth', require('./routes/user'));
//========

app.post('/save', require('./routes/about'));
app.post('/post', require('./routes/post'));

app.get('/post', function(req, res) {
	Model.find({}).then(function(posts){
		console.log(posts);
	});
});

app.post('/work', require('./routes/work'));
app.post('/', require('./routes/main'));
app.post('/mail', require('./routes/mail'));
app.post('/auth', require('./routes/user'));


/*app.post('/save', function(req, res) {
	console.log('Поступил POST запрос по маршруту Save!', req.body);
	fs.writeFileSync('./posts.txt', JSON.stringify(req.body));
	res.end();
});

app.post('/post', function(req, res) {
	console.log('Поступил POST запрос по маршруту Post!', req.body);
	res.end();
});

app.post('/work', function(req, res) {
	console.log('Поступил POST запрос по маршруту Work!', req.body);
	res.end();
});

app.post('/mail', function(req, res) {
	console.log('Поступил POST запрос по маршруту Mail!', req.body);
	res.end();
});

app.post('/auth', function(req, res) {
	console.log('Поступил POST запрос по маршруту Auth!', req.body);
	res.end();
});*/

app.get('/', function(req, res) {
	res.setHeader('Content-type', 'text/html;charset=utf8');
	res.end('работает!');
});

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
