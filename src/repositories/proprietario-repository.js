'use strict';

const mongoose = require('mongoose');
const Proprietario = mongoose.model('Proprietario');

exports.get = async() => {
	const res = await 
		Proprietario
		.find({});
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Proprietario
		.find({
				nome: nome
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Proprietario
		.findById(id);
	return res;
};

exports.create = async(data) => {
	var proprietario = new Proprietario(data);
	const res = await proprietario.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Proprietario
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					cpf : data.cpf,
					telefone : data.telefone,
					endereco : data.endereco,
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Proprietario
			.findOneAndRemove(id);
	return res;
};