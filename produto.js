const Sequelize = require('sequelize');
const database = require('./banco.js');
const MovimentoProduto = require("./movimentacao.js");

const Produto = database.define('produto', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Produto;