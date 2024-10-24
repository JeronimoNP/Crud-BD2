const Express = require('express');
const Cors = require('cors');
const cadastro = require('../Back-end/routes/Cadastro_Rout.js');
const api = Express();


api.use(Cors());

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
