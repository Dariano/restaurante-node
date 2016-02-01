module.exports = (model) => {
	return (req, res) => {
		const novo = req.body;

		model.create(novo)
			.then((resultado) => {
				res.status(201).json(resultado);
			}, (erro) => {
				res.status(500).json(erro);
			})
	};
};