var fs = require('fs'),
	express = require('express'),
	app = express();
app.get('/*', function(req, res){
	res.setHeader('Content-Type', 'text/html; charset=utf8');
	console.log('Получен запрос по адресу: ' + req.url);
	var fileName = './build/' + req.url;
	if (fs.existsSync('./build/index.html')){
		var contant = fs.readFileSync('./build/index.html'/*, {encoding: 'utf8'}*/);
		res.write(contant);
	} else {
		var content = fs.readFileSync('./build/404.html', {encoding: 'utf8'});
		res.status(404);
		res.write(content);
	}
	
	res.end();
})
app.listen(9999);