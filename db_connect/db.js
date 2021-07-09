const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_database', 'root', '14099041ROr', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    }
});

module.exports = sequelize
