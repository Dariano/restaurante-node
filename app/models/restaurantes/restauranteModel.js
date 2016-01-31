const mongoose = require('mongoose');
const querystring = require('querystring');
const url = require('url');
const Schema = require('./schema-restaurante');
const Profissinal = mongoose.model('restaurante', Schema);

'use strict';

const create = (req, res) => {
	const novoProfissional = req.body;

	Profissinal.create(novoProfissional)
		.then((profissional) => {
			res.status(201).json(profissional);
		}, (erro) => {
			res.status(500).json(erro);
		})
};

const find = (req, res) => {
	Profissinal.find(req.query)
		.then((contatos) => {
			res.status(200).json(contatos);
		}, (erro) => {
			res.status(404).json(erro)
		});
};

const findOne = (req, res) => {
	const id = req.params.id;

	console.log(id);

	Profissinal.findOne({ _id: id })
		.then((contatos) => {
			res.status(200).json(contatos);
		}, (erro) => {
			res.status(404).json(erro)
		});
};

const update = (req, res) => {
	const _idProfissional = req.params.id;
	const profissionalModificado = req.body;

	console.log(_idProfissional);
	console.log(profissionalModificado);

	Profissinal.findOneAndUpdate({ _id: _idProfissional}, profissionalModificado)
		.then((profissional) => {
			res.status(200).json(profissional);
		}, (erro) => {
			res.status(500).json(erro);
		});
};

const remove = (req, res) => {
	const id = req.params.id;

	Profissinal.remove({ _id: id })
		.then(() => {
			res.status(204).end();
		}, (erro) => {
			res.status(404).json(erro);
		});
};

const repostory = {
	create,
	update,
	find,
	findOne,
	remove
};

module.exports = repostory;