'use strict';

const mongoose = require('mongoose');
const Colaborador = mongoose.model('Colaborador');

exports.get = async() => {
	const res = await 
		Colaborador
		.find({});
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Colaborador
		.find({
				nome: nome
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Colaborador
		.findById(id);
	return res;
};

exports.create = async(data) => {
	var colaborador = new Colaborador(data);
	const res = await colaborador.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Colaborador
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					cpf : data.cpf,
					telefone : data.telefone,
					login : data.login,
					senha : data.senha,
					funcao : data.funcao,
					endereco : data.endereco,
					isativo : data.isativo
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Colaborador
			.findOneAndRemove(id);
	return res;
};