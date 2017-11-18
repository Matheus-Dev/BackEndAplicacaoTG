'use strict'

const mongoose = require('mongoose');
const Alimento = mongoose.model('Alimento');

const repositoryAlimento = require('../repositories/alimento-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Alimentos!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.getByNome(req.params.nome);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Alimentos!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Alimentos!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryAlimento.create(req.body);
		res.status(201).send({
			message: 'Alimento adicionado!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Alimento!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryAlimento.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Alimento atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Alimento!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryAlimento.delete(req.params.id);
		res.status(201).send({
			message: 'Alimento removido!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Alimento!', data:e
		});
	}
};