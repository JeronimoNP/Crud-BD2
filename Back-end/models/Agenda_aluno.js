const Sequelize = require('sequelize');
const db = require('./db');

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

    nascimento:{
        type: Sequelize.DATE,
        allowNull: false
    }
})

Agenda_alunoBD.sync();

module.exports = Agenda_alunoBD;