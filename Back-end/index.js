const Express = require('express');
const Cors = require('cors');
const cadastro = require('../Back-end/routes/Cadastro_Rout.js');
const api = Express();
const bodyParser = require('body-parser');


api.use(Cors());
api.use(bodyParser.json());

//direcionador de portas(rotas)
api.use('/', cadastro);

//inicialização da api
try{
    api.listen(3000, () =>{
        console.log('Servidor conectado!\nHost http://localhost:3000/');
    });
}catch(error){
    console.log(error,'Erro inexperado no funcionamento da api, contate o desenvolvedor!');
}
