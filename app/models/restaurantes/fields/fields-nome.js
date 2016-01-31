const _get = (valor) => valor.toUpperCase();
const _set = (valor) => valor.toLowerCase();
const _validate = (valor) => valor.length > 3;

const Field = {
	type: String,
	get: _get,
	set: _set,
	validate: [_validate, 'Nome precisa ser maior que 3 caracteres'],
	required: true,
	index: true
};

module.exports = Field;