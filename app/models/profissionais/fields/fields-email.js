const _set = (valor) => valor.toLowerCase();
const _validate = (valor) => /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/.test(valor);

const Field = {
	type: String,
	set: _set,
	validate: [_validate, 'Email{{VALUE}} inválido!'],
	required: true
};

module.exports = Field;