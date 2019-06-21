/* Importando o mongoose */
const mongoose = require('mongoose')
const requireDir = require('require-dir')

/* Ligando conexão ao banco de dados */
mongoose.connect('mongodb://127.0.0.1:27017/tools',{
	useNewUrlParser: true
})

/* Importando Models da aplicação */
requireDir('./models')

/* Promisse mongo */
mongoose.Promisse = global.Promisse

/* Exportando conexão */

module.exports = mongoose