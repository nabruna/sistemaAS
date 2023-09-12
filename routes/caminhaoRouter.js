const caminhaoController = require('../controllers/caminhaoController');
const express = require('express');

const router = express.Router();

router.get('/', caminhaoController.listarCaminhao);
router.get('/:renavam', caminhaoController.buscarCaminhao);
router.post('/', caminhaoController.adicionarCaminhao);
router.put('/:renavam', caminhaoController.atualizarCaminhao);
router.delete('/:renavam', caminhaoController.deletarCaminhao);

module.exports = router;