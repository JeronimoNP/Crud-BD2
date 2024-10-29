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
    console.log(dadoscadastro);
    //redirecionando para controllers para o tratamento de dados.
    cadastroControll.cadastro(dadoscadastro, res);
})

routes.get('/listar', (req, res) =>{
    cadastroControll.listar(res);
})

routes.delete('/delete', (req, res) => {
    const id = req.body;
    console.log(id);
    cadastroControll.deletar(id, res);
})

//exportando routes
module.exports = routes;