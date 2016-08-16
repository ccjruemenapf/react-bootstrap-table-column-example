'use strict';

var express = require('express');
var proxy = require('express-http-proxy');
var url = require('url');
var server = express();

server.set('port', 3000);

server.use('/', express.static('./assets/'));
server.use('/app.js', express.static('./build/app.js'));
server.use('/app.js.map', express.static('./build/app.js.map'));
server.use('/bootstrap.min.js', express.static('./node_modules/bootstrap/dist/js/bootstrap.min.js'));
server.use('/bootstrap.min.css', express.static('./node_modules/bootstrap/dist/css/bootstrap.min.css'));
server.use('/bootstrap.min.css.map', express.static('./node_modules/bootstrap/dist/css/bootstrap.min.css.map'));
server.use('/fonts/', express.static('./node_modules/bootstrap/fonts/'));
server.use('/*', express.static('./assets/index.html'));

server.listen(server.get('port'), function () {
    console.log('Server started on http://localhost:' +
    server.get('port') + '; press Ctrl-C to terminate.');
});
