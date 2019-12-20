const express = require('express');

const Dinosaurs = require('../dinosaurs/dinoModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	Dinosaurs.getAll()
		.then((dinosaur) => {
			res.status(200).json(dinosaur);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

server.post('/', (req, res) => {
	Dinosaurs.insert(req.body)
		.then((id) => {
			res.status(201).json(id);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

server.delete('/:id', (req, res) => {
	Dinosaurs.remove(req.params.id)
		.then((dinosaur) => {
			res.status(200).json(dinosaur);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

module.exports = server;
