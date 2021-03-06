'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/haras-controller');

router.get('/', controller.get);

router.get('/buscar/nome/:nome', controller.getByNome);

router.get('/buscar/id/:id', controller.getById);

router.get('/registrado/:id', controller.getHarasRegistrado);

router.post('/adicionar', controller.post);

router.put('/atualizar/:id', controller.put);

router.delete('/excluir/:id', controller.delete);

module.exports = router;