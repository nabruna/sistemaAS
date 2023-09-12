const proprietarioController = require('../controllers/proprietarioController');
const express = require('express');

const router = express.Router();

router.get('/', proprietarioController.listarProprietario);
router.get('/:cnpj', proprietarioController.buscarProprietario);
router.post('/', proprietarioController.adicionarProprietario);
router.put('/:cnpj', proprietarioController.atualizarProprietario);
router.put('/:cnpj/caminhao', proprietarioController.atualizarCaminhao);
router.delete('/:cnpj', proprietarioController.deletarProprietario);

module.exports = router;