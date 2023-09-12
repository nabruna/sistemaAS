const MotoristaModel = require('../models/motoristaModel');

class MotoristaController{

    async listarMotorista(req,res){
        const resultado = await MotoristaModel.find({});
        res.json(resultado);
    }

    async buscarMotorista(req,res){
        const cpf = req.params.cpf;
        const motorista = await MotoristaModel.findOne({'cpf': cpf});
        res.json(motorista);
    }

    async adicionarMotorista(req,res){
        const motorista = req.body;
        const registro = await MotoristaModel.create(motorista);
        res.json(registro);
    }

    async atualizarMotorista(req,res){
        const cpf = req.params.cpf;
        const motorista = req.body;
        const _id = (await MotoristaModel.findOne({'cpf': cpf}))._id;
        await MotoristaModel.findByIdAndUpdate(String(_id), motorista);
        res.send("Cadastro atualizado");
    }

    async deletarMotorista(req,res){
        const cpf = req.params.cpf;
        await MotoristaModel.findOneAndDelete({'cpf':cpf});
        res.send("Exclusão feita com sucesso");
    }

}

module.exports = new MotoristaController();