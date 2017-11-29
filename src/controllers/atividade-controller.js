'use strict'

const mongoose = require('mongoose');
const Atividade = mongoose.model('Servico');

const repositoryAtividade = require('../repositories/atividade-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getAtividadesColaborador = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.getAtividadesColaborador(req.params.idColaborador, 
			req.params.idHaras, req.params.dtInicio, req.params.dtTermino);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getAtividadesAnimal = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.getAtividadesAnimal(req.params.idAnimal,
		 req.params.idHaras, req.params.dtInicio, req.params.dtTermino);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getAtividadesProprietario = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.getAtividadesProprietario(req.params.idProprietario,
		 req.params.idHaras, req.params.dtInicio, req.params.dtTermino);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getByCodigo = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.getByCodigo(req.params.codigo);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryAtividade.create(req.body);
		res.status(201).send({
			message: 'Atividade adicionado!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Atividade!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryAtividade.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Atividade atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Atividade!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryAtividade.delete(req.params.id);
		res.status(201).send({
			message: 'Atividade removido!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Atividade!', data:e
		});
	}
};