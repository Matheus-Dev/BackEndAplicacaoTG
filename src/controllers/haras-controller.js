'use strict'

const mongoose = require('mongoose');
const Haras = mongoose.model('Haras');

const repositoryHaras = require('../repositories/haras-repository');

const emailService = require('../services/email-service');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryHaras.get();
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Haras!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryHaras.getByNome(req.params.nome);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Harass!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryHaras.getById(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Harass!', data:e
		});
	}
};

exports.getHarasRegistrado = async(req, res, next) => {
	try{
		var data = await repositoryHaras.getHarasRegistrado(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Haras!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		var data = await repositoryHaras.create(req.body);

		emailService.send(req.body.email, 'Chave de Registro', global.EMAIL_TMPL.replace(data.data._id));

		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Haras!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		var data = await repositoryHaras.update(req.params.id, req.body);
		res.status(data.status).send(data);

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Haras!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		 var data = await repositoryHaras.delete(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Haras!', data:e
		});
	}
};