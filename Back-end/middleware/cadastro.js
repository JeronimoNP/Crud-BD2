const agenda_alunoBd = require('../models/Agenda_aluno.js');


//verificar codigo aluno
    function vericarCod(Cod_matricula){
        // const padrao = 
    }

    //verificar se tem os 11 numeros de cpf é que não contenha string
    function verificacpf(cpf){
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