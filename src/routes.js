/*Importando as rotas do Express */
const routes = require('express').Router()

/* Importando os controllers da aplicação */
const ToolsController = require('./controllers/ToolsController')

/* Rotas de busca da api (get) */
routes.get('/tools', ToolsController.list)

/* Rotas de adição da api (post) */
routes.post('/tools', ToolsController.store)


/* Rotas de exclusão da api (delete) */
routes.delete('/tools/:id/delete', ToolsController.destroy)

/* Exportando arquivo de rotas */
module.exports = routes