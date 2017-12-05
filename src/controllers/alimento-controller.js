'use strict'

const mongoose = require('mongoose');
const Alimento = mongoose.model('Alimento');

const repositoryAlimento = require('../repositories/alimento-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.get();
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Alimentos!', data:e
		});
	}
};

exports.getPorHaras = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.getPorHaras(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getValidos = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.getValidos(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.getByNome(req.params.nome);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Alimentos!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.getById(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Alimentos!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.create(req.body);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Alimento!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.update(req.params.id, req.body);
		res.status(data.status).send(data);

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Alimento!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		var data = await repositoryAlimento.delete(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Alimento!', data:e
		});
	}
};