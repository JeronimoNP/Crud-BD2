const {sequelize, Sequelize} = require('sequelize');

try{
    const sequelize = new Sequelize('postgres', 'postgres', 'LIMAO',{
        host: 'localhost',
        dialect: 'postgres'
    })
    
}catch(error){
    console.log(error, 'Erro inexperado no link com o banco de dados');
}