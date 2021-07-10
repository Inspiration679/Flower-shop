const Sequelize = require('sequelize')
const sequelize = require('../db_connect/db')

const flower = sequelize.define('animes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    Img: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})

module.exports = flower
