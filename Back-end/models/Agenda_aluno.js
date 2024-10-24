const Sequelize = require('sequelize');
const db = require('./db.js');

const Agenda_alunoBD = db.define('agenda', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome:{
        type: Sequelize.STRING(255),
        allowNull: false
    },

    email:{
        type: Sequelize.STRING(100),
        allowNull: false
    },

    telefone:{
        type: Sequelize.STRING(15),
        allowNull: false
    }
})