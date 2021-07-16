const Sequelize = require('sequelize')
const sequelize = require('../db_connect/db')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const tokenStore = sequelize.define("sessions", {
    sid: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    userId: Sequelize.STRING,
    expires: Sequelize.DATE,
    data: Sequelize.TEXT,
});

function extendDefaultFields(defaults, session) {
    return {
        data: defaults.data,
        expires: defaults.expires,
        userId: session.userId,
    };
}

const store =  new SequelizeStore({
    db: sequelize,
    table: 'sessions',
    extendDefaultFields: extendDefaultFields,
})

const User = sequelize.define('users', {
    iduser: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    user_first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_second_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false })

const Cart = sequelize.define('cart', {
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
}, { timestamps: false })

User.hasMany(Cart, {onDelete: "cascade"})
Cart.belongsTo(User)

module.exports = {User, Cart, tokenStore, store}

