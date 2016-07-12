var fs = require('fs'),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
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