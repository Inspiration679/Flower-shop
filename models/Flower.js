const Sequelize = require('sequelize')
const sequelize = require('../db_connect/db')

const flower = sequelize.define('animes', {
    ID: {
        primaryKey: true,
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
    Img: {
        primaryKey: true,
        type: Sequelize.TEXT
    },
    Description: {
        type: Sequelize.TEXT,
        allowNull: false
    },


})

module.exports = flower
