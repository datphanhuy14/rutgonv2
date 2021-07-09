#!/usr/bin/env node

/**
 * Module dependencies.
 */

let app = require('./configs/express');
let debug = require('debug')('mcb-internal:server');
let http = require('http');
let conf = require('./configs/info');

app.set('port', conf.app.port);
let server = http.createServer(app);
server.listen(conf.app.port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {

    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + conf.app.port
        : 'Port ' + conf.app.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Đang lắng nghe cổng :  ' + bind);
}
