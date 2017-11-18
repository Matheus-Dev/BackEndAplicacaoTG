'use strict'

const mongoose = require('mongoose');
const Veterinario = mongoose.model('Veterinario');

const repositoryVeterinario = require('../repositories/veterinario-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Veterinarios!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.getByNome(req.params.nome);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Veterinarios!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Veterinarios!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryVeterinario.create(req.body);
		res.status(201).send({
			message: 'Veterinario adicionado!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Veterinario!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryVeterinario.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Veterinario atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Veterinario!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryVeterinario.delete(req.params.id);
		res.status(201).send({
			message: 'Veterinario removido!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Veterinario!', data:e
		});
	}
};