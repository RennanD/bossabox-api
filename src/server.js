/* Importando o Express*/
const express = require('express')

/* Importando arquivo de rotas */
const route = require('./routes') 

/* Importando o Cors */
const cors = require('cors')


/* Iniciando nossa aplicação com Express */
const app = express()
app.use(express.json())

/* Permissões da api */
app.use(cors()) 

/* Iniciando as rotas da aplicação */
app.use(route)

/* Ligando o servidor */
app.listen(3000)