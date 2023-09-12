const motoristaController = require('../controllers/motoristaController');
const express = require('express');

const router = express.Router();

router.get('/', motoristaController.listarMotorista);
router.get('/:cpf', motoristaController.buscarMotorista);
router.post('/', motoristaController.adicionarMotorista);
router.put('/:cpf', motoristaController.atualizarMotorista);
router.delete('/:cpf', motoristaController.deletarMotorista);

module.exports = router;