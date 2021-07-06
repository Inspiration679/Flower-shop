const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_database', 'root', '14099041ROr', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize