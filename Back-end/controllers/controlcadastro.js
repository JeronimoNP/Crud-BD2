    // const express = require('express');
    const Registermiddleware = require('../middleware/cadastromidd');

    async function cadastro(dados, res){
        
        try{
            //verificando dados recebidos
            const cpfvalidated = Registermiddleware.cpfchecker(dados.cpf);
            const emailvalidated = Registermiddleware.emailchecker(dados.email);
            const matriculavalidated = Registermiddleware.matriculachecker(dados.matricula);

            //condição para validar se os dados passados estão corretos
            if(cpfvalidated & emailvalidated & matriculavalidated){
                await Registermiddleware.cadastraraluno(dados, res);
            }else{
                res.status(406).json({
                    Erro: true,
                    Dados: "email ou senha ou matricula invalidos!"
                })
            }

        }catch(error){
            console.log('erro na passagem de dados!')
            res.status(406).json({
                Erro: true,
                info: 'erro na requisição!'
            })
        }
    }

    function listar(res){

    }
    module.exports = {
        cadastro,
        listar
    };