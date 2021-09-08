const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_database', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    }
});

module.exports = sequelize
