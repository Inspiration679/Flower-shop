const Sequelize = require('sequelize');

const sequelize = new Sequelize('мать', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = sequelize
