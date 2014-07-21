
	var http = require('http');
	var express = require('./index.js');

	var app = express();
	var server = http.createServer(app);
	server.listen(4000);

