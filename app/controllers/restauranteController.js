'use strict';

module.exports  = (app) => {
	const restaurante = app.models.restaurantes.restauranteModel;

	const CRUD = {
		create: restaurante.create,
		find: restaurante.find,
		findOne: restaurante.findOne,
		update: restaurante.update,
		remove: restaurante.remove
	};

	return CRUD;
}