'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/colaborador-controller');

router.get('/', controller.get);

router.get('/buscar/todos/:id', controller.getPorHaras);

router.get('/buscar/ativos/:id', controller.getValidos);

router.get('/buscar/nome/:nome', controller.getByNome);

router.get('/buscar/id/:id', controller.getById);

router.post('/adicionar', controller.post);

router.put('/atualizar/:id', controller.put);

router.delete('/excluir/:id', controller.delete);

router.get('/authenticate/:codHaras/:login/:senha', controller.authenticate);

module.exports = router;