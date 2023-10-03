const {Sequelize, DataTypes} = require('sequelize');
const banco = require('./banco');
const Movimentacao = require('./movimentacao');

const Produto = banco.define('produto', {
    produtoId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Produto.hasMany(Movimentacao, {foreignKey: 'produtoId'});
Movimentacao.belongsTo(Produto, {foreignKey: 'produtoId'});

module.exports = Produto;