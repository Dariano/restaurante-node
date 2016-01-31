module.exports = (app) => {
	var controller = app.controllers.restauranteController;

	app.route('/restaurantes')
		.get(controller.find)
		.post(controller.create);

	app.route('/restaurantes/:id')
		.get(controller.findOne)
		.put(controller.update)
		.delete(controller.remove);
};