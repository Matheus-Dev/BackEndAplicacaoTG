'use strict'

const mongoose = require('mongoose');
const Remedio = mongoose.model('Remedio');

const repositoryRemedio = require('../repositories/remedio-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryRemedio.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Remedios!', data:e
		});
	}
};

exports.getPorHaras = async(req, res, next) => {
	try{
		var data = await repositoryRemedio.getPorHaras(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getValidos = async(req, res, next) => {
	try{
		var data = await repositoryRemedio.getValidos(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryRemedio.getByNome(req.params.nome);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Remedios!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryRemedio.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Remedios!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryRemedio.create(req.body);
		res.status(201).send({
			message: 'Remedio adicionado!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Remedio!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryRemedio.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Remedio atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Remedio!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryRemedio.delete(req.params.id);
		res.status(201).send({
			message: 'Remedio removido!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Remedio!', data:e
		});
	}
};