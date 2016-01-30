'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
	nome: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	}
};

const profissionalSchema = new Schema(_schema);

module.exports = profissionalSchema;