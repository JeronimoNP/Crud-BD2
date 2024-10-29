const Sequelize = require('sequelize');

try{
    const sequelize = new Sequelize('agenda_alunos', 'postgres', 'LIMAO',{
        host: 'localhost',
        dialect: 'postgres'
    });

    sequelize.authenticate().then(() => {
        console.log("Conectado com o banco de dados");
    }).catch(function(error){
        console.error("erro ao conectar com o banco de dados", error);
        console.log(error);
    })

    module.exports = sequelize;
    
}catch(error){
    console.log(error, 'Erro inexperado no link com o banco de dados');
}

