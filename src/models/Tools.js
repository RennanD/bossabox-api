/* Importando o banco mongo */
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

/* Construindo nosso Model */
const ToolsSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	link : {
		type: String,
		required: true
	},
	tags:[{
		type: String,
		required: true
	}]
}, {timestamps: true})

/* paginação do model */
ToolsSchema.plugin(mongoosePaginate)

/* Exportando nosso Model */ 
mongoose.model('Tools', ToolsSchema)