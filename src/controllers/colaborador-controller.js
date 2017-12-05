'use strict'

const mongoose = require('mongoose');
const Colaborador = mongoose.model('Colaborador');

const repositoryColaborador = require('../repositories/colaborador-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.get();
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Colaboradors!', data:e
		});
	}
};

exports.getPorHaras = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.getPorHaras(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getValidos = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.getValidos(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Proprietarios!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.getByNome(req.params.nome);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Colaboradors!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.getById(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Colaboradors!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.create(req.body);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Colaborador!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.update(req.params.id, req.body);
		res.status(data.status).send(data);

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Colaborador!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.delete(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Colaborador!', data:e
		});
	}
};

exports.authenticate = async(req, res, next) => {
	try{
		var data = await repositoryColaborador.authenticate(req.params.codHaras, req.params.login, req.params.senha);
		res.status(data.status).send(data);

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao tentar fazer o login!', data:e
		});
	}
};