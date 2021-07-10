const Sequelize = require('sequelize')
const sequelize = require('../db_connect/db')

const user = sequelize.define('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_second_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const cart = sequelize.define('carts', {
    id_cart: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

const password = sequelize.define('passwords', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

user.hasMany(cart, {onDelete: "cascade"})
user.hasMany(password, {onDelete: "cascade"})

module.exports = {user, cart, password}
