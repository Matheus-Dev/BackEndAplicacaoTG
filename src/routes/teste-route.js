'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/teste-controller');

router.get('/', controller.get);

router.get('/buscar/codigo/:nome', controller.getByCodigo);

router.get('/buscar/id/:id', controller.getById);

router.get('/buscar/buscarDatas/:dtInicio/:dtTermino', controller.getByDate);

router.post('/adicionar', controller.post);


module.exports = router;