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
const cors = require('cors');
routes.use(cors());

routes.post('/cadastro', (req, res) =>{

    //puxando os dados do front end
    const dadoscadastro = req.body;
    console.log(req.body);
    //redirecionando para controllers para o tratamento de dados.
    dadoscadastro.cadastro(dadosempresa, res);
})

routes.get('/listar', (req, res) =>{
    res.status(200).json({
        accept: true,
        "route": 'listar'
    })
})

//exportando routes
module.exports = routes;