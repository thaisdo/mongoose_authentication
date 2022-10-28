const express = require('express');

const router = express.Router();

const controlador = require('../controllers/contatoController')

router.get('/', controlador.listar);

router.get('/:id', controlador.consultarPeloId);

router.post('/', controlador.criar);

router.put('/:id', controlador.atualizar);

router.delete('/:id', controlador.remover);

module.exports = router;