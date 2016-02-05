const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
	votos: [ require('./schema-voto')],
	localidade: { type: String , required: true },
	semanaDaVotacao: { type: Number, required: true},
	created_at: require('./fields/fields-created-at')
};

const urnaSchema = new Schema(_schema);

module.exports = urnaSchema;