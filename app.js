const express = require('express');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

server.use('/', express.static(__dirname + '/'));

server.listen(port, hostname);


