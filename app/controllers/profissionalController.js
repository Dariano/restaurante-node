'use strict';

module.exports  = (app) => {
	const profissional = app.models.profissionais.profissionalModel;

	const CRUD = {
		create: profissional.create,
		find: profissional.find,
		findOne: profissional.findOne,
		update: profissional.update,
		remove: profissional.remove
	};

	return CRUD;
}