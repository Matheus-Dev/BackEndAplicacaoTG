'use strict'

const mongoose = require('mongoose');
const Haras = mongoose.model('Haras');

const repositoryHaras = require('../repositories/haras-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryHaras.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Harass!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryHaras.getByNome(req.params.nome);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Harass!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryHaras.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Harass!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryHaras.create(req.body);
		res.status(201).send({
			message: 'Haras adicionado!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Haras!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryHaras.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Haras atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Haras!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryHaras.delete(req.params.id);
		res.status(201).send({
			message: 'Haras removido!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Haras!', data:e
		});
	}
};