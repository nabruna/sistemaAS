const {Sequelize, DataTypes} = require('sequelize');
const banco = require('./banco');
const Produto = require('./produto');

const Movimentacao = banco.define('movimentacao', {
    movimentacaoId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    qtdMovimento:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    tipo:{
        type:DataTypes.STRING,
        allowNull:false
    }//,
    
    //   produtoId: {
    //     type:Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'produtos',
    //         key: 'produtoId'
    //     },
    //   },
});




module.exports = Movimentacao;