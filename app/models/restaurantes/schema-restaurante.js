const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var _schema = {
	nome: require('./fields/fields-nome'),
	endereco: require('./fields/fields-endereco'),
	ultimaVitoria: require('./fields/fields-ultima-vitoria'),
	created_at: require('./fields/fields-created-at')
};

const restauranteSchema = new Schema(_schema);

module.exports = restauranteSchema;