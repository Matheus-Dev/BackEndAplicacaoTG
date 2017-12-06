'use strict';

const http = require('http');
const debug = require('debug')('backendharas:server');
const app = require('../src/app');

const port = process.env.PORT || 3000;

//const port = 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('listening',onListening);

function onListening(){
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe' + addr
		: 'port' + addr.port;
	debug('Listening on' + bind);
}

console.log('API rodando na porta: '+port);