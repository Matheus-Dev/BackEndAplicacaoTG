'use strict'

const mongoose = require('mongoose');
const Colaborador = mongoose.model('Colaborador');

const repositoryColaborador = require('../repositories/colaborador-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Colaboradors!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.getByNome(req.params.nome);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Colaboradors!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Colaboradors!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryColaborador.create(req.body);
		res.status(201).send({
			message: 'Colaborador adicionado!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Colaborador!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryColaborador.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Colaborador atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Colaborador!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryColaborador.delete(req.params.id);
		res.status(201).send({
			message: 'Colaborador removido!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Colaborador!', data:e
		});
	}
};