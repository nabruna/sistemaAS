const caminhaoModel = require('../models/caminhaoModel');
const ProprietarioModel = require('../models/proprietarioModel');

class ProprietarioController{

    async listarProprietario(req,res){
        const resultado = await ProprietarioModel.find({});
        res.json(resultado);
    }

    async buscarProprietario(req,res){
        const cnpj = req.params.cnpj;
        const proprietario = await ProprietarioModel.findOne({'cnpj': cnpj});
        res.json(proprietario);
    }

    async adicionarProprietario(req,res){
        const proprietario = req.body;
        const registro = await ProprietarioModel.create(proprietario);
        res.json(registro);
    }

    async atualizarProprietario(req,res){
        const cnpj = req.params.cnpj;
        const proprietario = req.body;
        const _id = (await ProprietarioModel.findOne({'cnpj': cnpj}))._id;
        await ProprietarioModel.findByIdAndUpdate(String(_id), proprietario);
        res.send("Cadastro atualizado");
    }

    async atualizarCaminhao(req, res){
        const idProprietario = req.params.cnpj;
        const idCaminhoes = req.body;

        if(idCaminhoes != null && idCaminhoes != 'undefined' && idCaminhoes.length > 0){
            const caminhaoAtualizar = await caminhaoModel.find({'_id': {$in:idCaminhoes}});
            await ProprietarioModel.findOneAndUpdate({'_id': idProprietario}, {$set:{caminhao: caminhaoAtualizar}});
        }else{
            await ProprietarioModel.findOneAndUpdate({'_id': idProprietario}, {$set:{caminhao: []}});
        }
        const resultado = await ProprietarioModel.findOne({'_id': idProprietario});
        res.json(resultado);
    }

    async deletarProprietario(req,res){
        const cnpj = req.params.cnpj;
        await ProprietarioModel.findOneAndDelete({'cnpj':cnpj});
        res.send("Exclusão feita com sucesso");
    }

}

module.exports = new ProprietarioController();