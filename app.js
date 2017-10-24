var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function(){
	console.log('Server started at Port ' + app.get('port'))
});