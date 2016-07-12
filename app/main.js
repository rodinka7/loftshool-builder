var fs = require('fs'),
	express = require('express'),
	app = express();
app.get('*', function(req, res){
	console.log('Получен запрос по адресу: ' + req.url);
	var fileName = 'build/' + req.url;
	if (fs.existsSync(fileName)){
		var content = fs.readFileSync('build/'+req.url, {encoding: 'utf8'});
		res.write(content);
		res.write('123');
	} else {
		res.write('Файл не найден');
	}
	
	res.end();
})
app.listen(9999);