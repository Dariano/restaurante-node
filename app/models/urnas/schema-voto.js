const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var _schema = {
	idEleitor: require('./fields/fields-id-eleitor'),
	idCandidato: require('./fields/fields-id-candidato'),
	created_at: require('./fields/fields-created-at')
};

const votoSchema = new Schema(_schema);

module.exports = votoSchema;