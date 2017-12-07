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

exports.getPorHaras = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.getPorHaras(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getValidos = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.getValidos(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.getByNome(req.params.nome);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Veterinarios!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.getById(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Veterinarios!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.create(req.body);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Veterinario!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.update(req.params.id, req.body);
		res.status(data.status).send(data);

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Veterinario!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		var data = await repositoryVeterinario.delete(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Veterinario!', data:e
		});
	}
};