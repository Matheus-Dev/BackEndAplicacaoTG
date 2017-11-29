'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/atividade-controller');

router.get('/buscar/animal/:idAnimal/:idHaras/:dtInicio/:dtTermino', controller.getAtividadesAnimal);

router.get('/buscar/colaborador/:idColaborador/:idHaras/:dtInicio/:dtTermino', controller.getAtividadesColaborador);

router.get('/buscar/proprietario/:idProprietario/:idHaras/:dtInicio/:dtTermino', controller.getAtividadesProprietario);

router.get('/', controller.get);

router.get('/', controller.get);

router.get('/buscar/codigo/:codigo', controller.getByCodigo);

router.get('/buscar/id/:id', controller.getById);

router.post('/adicionar', controller.post);

router.put('/atualizar/:id', controller.put);

router.delete('/excluir/:id', controller.delete);

module.exports = router;