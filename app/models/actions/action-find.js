module.exports = (model) =>{
	return (req, res) => {
		model.find(req.query)
			.then((resultado) => {
				res.status(200).json(resultado);
			}, (erro) => {
				res.status(404).json(erro)
			});
	};	
};