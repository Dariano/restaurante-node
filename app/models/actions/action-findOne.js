module.exports = (model) => {
	return (req, res) => {
		const _id = req.params._id;

		model.findOne(_id)
			.then((resultado) => {
				res.status(200).json(resultado);
			}, (erro) => {
				res.status(404).json(erro)
			});
	};
};