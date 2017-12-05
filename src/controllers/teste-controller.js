'use strict'

const mongoose = require('mongoose');
const Teste = mongoose.model('Teste');

const repositoryTeste = require('../repositories/teste-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryTeste.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Testes!', data:e
		});
	}
};

exports.getByCodigo = async(req, res, next) => {
	try{
		var data = await repositoryTeste.getByNome(req.params.codigo);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Testes!', data:e
		});
	}
};

exports.getByDate = async(req, res, next) => {
	try{
		var data = await repositoryTeste.getByDate(req.params.dtInicio, req.params.dtTermino);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Testes!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryTeste.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Testes!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		var data = await repositoryTeste.create(req.body);
		res.status(201).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Teste!', data:e
		});
	}
};