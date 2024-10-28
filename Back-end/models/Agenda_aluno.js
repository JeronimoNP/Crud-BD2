const Sequelize = require('sequelize');
const db = require('./db.js');

const Agenda_alunoBD = db.define('agenda', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    matricula:{
        type: Sequelize.STRING(12),
        allowNull: false
    },

    nome:{
        type: Sequelize.STRING(255),
        allowNull: false
    },

    cpf:{
        type: Sequelize.STRING(14),
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