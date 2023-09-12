const CaminhaoModel = require('../models/caminhaoModel');

class CaminhaoController{

    async listarCaminhao(req,res){
        const resultado = await CaminhaoModel.find({});
        res.json(resultado);
    }

    async buscarCaminhao(req,res){
        const renavam = req.params.renavam;
        const caminhao = await CaminhaoModel.findOne({'renavam': renavam});
        res.json(caminhao);
    }

    async adicionarCaminhao(req,res){
        const Caminhao = req.body;
        const registro = await CaminhaoModel.create(Caminhao);
        res.json(registro);
    }

    async atualizarCaminhao(req,res){
        const renavam = req.params.renavam;
        const caminhao = req.body;
        const _id = (await CaminhaoModel.findOne({'renavam': renavam}))._id;
        await CaminhaoModel.findByIdAndUpdate(String(_id), caminhao);
        res.send("Cadastro atualizado");
    }

    async deletarCaminhao(req,res){
        const renavam = req.params.renavam;
        await CaminhaoModel.findOneAndDelete({'renavam':renavam});
        res.send("Exclusão feita com sucesso");
    }

}

module.exports = new CaminhaoController();