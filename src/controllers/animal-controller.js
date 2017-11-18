'use strict'

const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

const repositoryAnimal = require('../repositories/animal-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryAnimal.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Animals!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryAnimal.getByNome(req.params.nome);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Animals!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryAnimal.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Animals!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryAnimal.create(req.body);
		res.status(201).send({
			message: 'Animal adicionado!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Animal!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryAnimal.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Animal atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Animal!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryAnimal.delete(req.params.id);
		res.status(201).send({
			message: 'Animal removido!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Animal!', data:e
		});
	}
};