const Sequelize = require('sequelize')
const sequelize = require('../db_connect/db')

const flower = sequelize.define('flowers', {
    idflowers: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    flower_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    _description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = flower