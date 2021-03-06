'use strict'

const mongoose = require('mongoose');
const Proprietario = mongoose.model('Proprietario');

const repositoryProprietario = require('../repositories/proprietario-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryProprietario.get();
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getPorHaras = async(req, res, next) => {
	try{
		var data = await repositoryProprietario.getPorHaras(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getValidos = async(req, res, next) => {
	try{
		var data = await repositoryProprietario.getValidos(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryProprietario.getByNome(req.params.nome);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryProprietario.getById(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		var data = await repositoryProprietario.create(req.body);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Proprietario!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		var data = await repositoryProprietario.update(req.params.id, req.body);
		res.status(data.status).send(data);

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Proprietario!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		var data = await repositoryProprietario.delete(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Proprietario!', data:e
		});
	}
};