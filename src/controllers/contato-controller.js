'use strict'

const mongoose = require('mongoose');
const Contato = mongoose.model('Contato');

const repositoryContato = require('../repositories/contato-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryContato.get();
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar contatos!', data:e
		});
	}
};

exports.getByNome = async(req, res, next) => {
	try{
		var data = await repositoryContato.getByNome(req.params.nome);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar contatos!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryContato.getById(req.params.id);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar contatos!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		await repositoryContato.create(req.body);
		res.status(201).send({
			message: 'Contato adicionado!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar contato!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		await repositoryContato.update(req.params.id, req.body);
		res.status(201).send({
			message: 'Contato atualizado!'
		});

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o contato!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		await repositoryContato.delete(req.params.id);
		res.status(201).send({
			message: 'Contato removido!'
		});
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o contato!', data:e
		});
	}
};