const mongoose = require('mongoose');
const querystring = require('querystring');
const url = require('url');
const Schema = require('./schema-profissional');
const Profissinal = mongoose.model('profissional', Schema);

'use strict';

const getQuery = (_url) => {
	const url_parts = url.parse(_url);
	return querystring.parse(url_parts.query);
};

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
	const query = getQuery(req.url);

	Profissinal.find(query)
		.then((contatos) => {
			res.status(200).json(contatos);
		}, (erro) => {
			res.status(404).json(erro)
		});
};

const findOne = (req, res) => {
	const _id = req.params._id;

	Profissinal.findOne(_id)
		.then((contatos) => {
			res.status(200).json(contatos);
		}, (erro) => {
			res.status(404).json(erro)
		});
};

const update = (req, res) => {
	const _idProfissional = req.body._id;
	const profissionalModificado = req.body;


	Profissinal.findOneAndUpdate(_idProfissional, profissionalModificado)
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