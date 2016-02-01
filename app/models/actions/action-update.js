module.exports = (model) => {
	return (req, res) => {
		const _idModel = req.body._id;
		const modelModificado = req.body;

		model.findOneAndUpdate(_idModel, modelModificado)
			.then((resultado) => {
				res.status(200).json(resultado);
			}, (erro) => {
				res.status(500).json(erro);
			});
	};
};