'use strict'

const mongoose = require('mongoose');
const Operadora = mongoose.model('Operadora');

const repositoryOperadora = require('../repositories/operadora-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryOperadora.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar operadora!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryOperadora.getByNome(req.params.nome);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar operadora!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryOperadora.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar operadora!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryOperadora.create(req.body);
		res.status(201).send({
			message: 'Operadora adicionada!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar operadora!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryOperadora.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Operadora atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar a operadora!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryOperadora.delete(req.params.id);
		res.status(201).send({
			message: 'Operadora removida!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover a operadora!', data:e
		});
	}
};