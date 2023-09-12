require('./db/banco');
const express = require('express');
const servidor = express();
servidor.use(express.json());

const motoristaRouter = require('./routes/motoristaRouter');
servidor.use('/motoristas', motoristaRouter);

const caminhaoRouter = require('./routes/caminhaoRouter');
servidor.use('/caminhoes', caminhaoRouter);

const proprietarioRouter = require('./routes/proprietarioRouter');
servidor.use('/proprietarios', proprietarioRouter);

servidor.get('/', function(req, res){    
    res.send('Servidor de APIs rodando...');
});

servidor.listen(3020, function(){
    console.log('Servidor rodando em http://localhost:3020...');
});