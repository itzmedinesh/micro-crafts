var express = require('express');
var http = require('http');
var path = require('path');
var dustjs = require('adaro');

var home = require('./routes/home');

var app = express();
	
app.engine('dust',dustjs.dust({
	cache: true
}));

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'static')));

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function () {
	console.log('Micro Crafts Web Available On Port ' + app.get('port'));
});

app.get('/*', home.index);