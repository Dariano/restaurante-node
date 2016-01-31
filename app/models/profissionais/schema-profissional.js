const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var _schema = {
	nome: require('./fields/fields-nome'),
	email: require('./fields/fields-email'),
	created_at: require('./fields/fields-created-at')
};

const profissionalSchema = new Schema(_schema);

module.exports = profissionalSchema;