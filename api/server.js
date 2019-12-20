const express = require('express');

const Dinosaurs = require('../dinosaurs/dinoRouter');

const server = express();

server.use(express.json());
server.use('/dinosaurs', Dinosaurs);

server.get('/', (req, res) => {
	res.status(200).json({ api: 'She works!', dbenv: process.env.DB_ENV });
});

module.exports = server;
