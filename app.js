var Sequelize = require('sequelize');
var connection = new Sequelize('novoDB','root','positivo123',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

var conexao = connection.authenticate()
    .then(function(){
        console.log('Conexão bem sucedida');
    })
    .catch(function (err){
        console.log('Erro ao conectar');
    }).done();