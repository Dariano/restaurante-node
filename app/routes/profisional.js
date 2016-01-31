module.exports = (app) => {
	var controller = app.controllers.profissionalController;

	app.route('/profissionais')
		.get(controller.find)
		.post(controller.create);

	app.route('/profissionais/:id')
		.get(controller.findOne)
		.put(controller.update)
		.delete(controller.remove);
};