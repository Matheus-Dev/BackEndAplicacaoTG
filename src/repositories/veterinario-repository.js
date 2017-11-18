'use strict';

const mongoose = require('mongoose');
const Veterinario = mongoose.model('Veterinario');

exports.get = async() => {
	const res = await 
		Veterinario
		.find({});
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Veterinario
		.find({
				nome: nome
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Veterinario
		.findById(id);
	return res;
};

exports.create = async(data) => {
	var veterinario = new Veterinario(data);
	const res = await veterinario.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Veterinario
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					cpf : data.cpf,
					crmv : data.crmv,
					telefone : data.telefone,
					endereco : data.endereco,
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Veterinario
			.findOneAndRemove(id);
	return res;
};