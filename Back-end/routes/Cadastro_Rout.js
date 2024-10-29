/*
    Database: Agenda_aluno
        Campos:
            id:
            matricula:
            nome:
            email:
            nascimento:
            cpf:
            
*/

const express = require('express');
const routes = express.Router();
const cadastroControll = require('../controllers/controlcadastro');
const cors = require('cors');
routes.use(cors());

routes.post('/cadastro', (req, res) =>{

    //puxando os dados do front end
    const dadoscadastro = req.body;
    
    //redirecionando para controllers para o tratamento de dados.
    cadastroControll.cadastro(dadoscadastro, res);
})

routes.get('/listar', (res) =>{
    cadastroControll.listar(res);
})

//exportando routes
module.exports = routes;