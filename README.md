FORMAT: 1A
HOST: http://localhost:3000/

#Sample da Api

Para executar a API:
    
    $ npm install i // yarn add i
    $ yarn dev
    
    // Acessar "/tools" para adicionar e listar as ferramentas (POST / GET)
    // Acessar "/tools?tag=x" para fazer buscas por tags na API
    // Acessar "/tools/:id/delete" para excluir ferramentas

# Group Api

##Sobre[/]

Api que recebe e retorna objetos no formato de JSON, desprovida de autênticação.


## Tools [/tools]

### Cadastrar novas ferramentas [POST]

+ Request Cadastrar um ferramenta

    + Headers
        Accept: application/json
        Content-Type: application/json
    
    + Attributes (Tools)

+ Response 201 (appication/json)
    
    + Attributes (Tools)

### Listar ferramentas [GET]

+ Response 200 (appication/json)
    
    + Attributes (Tools)

+ Response 404 (appication/json)
    
    + Attributes (Error)

### Excluir ferramentas [DELETE]

+ Request Cadastrar um ferramenta

    + Headers
        Accept: application/json
        Content-Type: application/json
    
    + Attributes (Tools)

+ Response 200 (appication/json)
    
    + Attributes (Success)