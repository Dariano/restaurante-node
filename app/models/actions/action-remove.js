module.exports = (model) => {
	return (req, res) => {
		const id = req.params.id;

		model.remove({
				_id: id
			})
			.then(() => {
				res.status(204).end();
			}, (erro) => {
				res.status(404).json(erro);
			});
	};
};