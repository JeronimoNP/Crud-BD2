const agenda_alunoBd = require('../models/Agenda_aluno');


//verificar codigo aluno
    function teste(Cod_matricula){
        // const padrao = 
    }

    //verificar se tem os 11 numeros de cpf é que não contenha string
    function cpfchecker(cpf){
        const numero = /^[0-9]{9}$/;
        const validade = !numero.test(cpf);

        if(validade === true){
            const quantidadenumber = cpf.toString().length;
            if(quantidadenumber != 11){
                return false;
            }
        }
        return validade;
    }

    function emailchecker(email){
        const dominio = /^[a-zA-Z0-9.-]+@gmail.com$/;
        const validade = dominio.test(email);
        return validade;
    }

    function matriculachecker(matriculadd){
        const dominio = /^[0-9]{5}[a-zA-Z]{3}[0-9]{4}$/
        const validade = dominio.test(matriculadd);
        return validade;
    }

    async function cadastraraluno(dados, res){
        await agenda_alunoBd.create({
            nome: dados.nome,
            matricula: dados.matricula,
            email: dados.email,
            cpf: dados.cpf,
            nascimento: dados.nascimento
        }).then(() => {
            return res.status(201).json({
                erro: false,
                mensagem: "Aluno cadastrado com sucesso",
                nome: dados.nome
            });
        }).catch((error) => {
            console.error("erro ao cadastrar usuário:", error);
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao cadastrar aluno, consulte dev"
            });
        })
    }

    module.exports = {
        cpfchecker,
        emailchecker,
        matriculachecker,
        cadastraraluno
    };