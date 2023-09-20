const Sequelize = require ('sequelize');
const sequelize = new Sequelize('crud', 'root', 'positivo',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize;