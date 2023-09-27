const Sequelize = require('sequelize');
const database = require('./banco.js');
const Produto = require('./produto.js');

const Movimentacao = database.define('movimentacao', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    qtdMovimento:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    tipo:{
        type:Sequelize.STRING,
        allowNull:false
    },
      produtoId: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'id'
        },
      },
});

module.exports = Movimentacao;