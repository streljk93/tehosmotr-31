// require
var express = require('express');

// server app
var app = express();

// setting
app.use(express.static('app'));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
	console.log('server started '+ app.get('port'));
});