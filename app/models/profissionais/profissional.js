const mongoose = require('mongoose');
const Schema = require('./schema-profissional');
const profissinal = mongoose.model('profissional', Schema);

const create = (req, res) => {

};

const update = (req, res) => {

};

const getAll = (req, res) => {

};

const get = (req, res) => {

};

const remove = (req, res) => {

};

const repostory = {
	create,
	update,
	getAll,
	get,
	remove
};


module.exports = repostory;