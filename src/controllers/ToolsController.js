/* Conectando ao banco de dados da aplicação */
const mongoose = require('../mongoose')

/* Importando nosso Model */
const Tools = mongoose.model('Tools')

/* Exportando nosso Controller */
module.exports = {
	
	/* funcionalidade do controller que lista as ferramentas */
	async list(req, res){
		const tags = req.query.tags
		
		if(tags){
			const tools = await Tools.find({tags})
			return res.json(tools)
		} else {
			const tools = await Tools.find()

			return res.json(tools)
		}

		
	},
	/* funcionalidade do controller que adiciona novas ferramentas */
	async store(req, res){

		const tools = await Tools.create(req.body)

		return res.json(tools)
	},

	/* funcionalidade do controller que que exclui ferramentas do banco de dados  */
	async destroy(req, res){
		await Tools.findByIdAndRemove(req.params.id)

		return res.send('Arquivo excluído com sucesso!')
	}
}