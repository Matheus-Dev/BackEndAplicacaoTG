'use strict';

const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Animal
		.find({})
		.populate('haras')
		.populate('proprietario')
		.populate('veterinario')
		;
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Animal
		.find({
				nome: nome
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Animal
		.findById(id);
	return res;
};

exports.create = async(data) => {
	data.dataNascimento = moment(data.dataNascimento, "DD/MM/YYYY", "pt-BR").format('MM-DD-YYYY', 'pt-BR');
	var animal = new Animal(data);
	const res = await animal.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Animal
			.findByIdAndUpdate(id, {
				$set: {
					codigo : data.codigo,
					nome : data.nome,
					dataNascimento : data.dataNascimento,
					raca : data.raca,
					sexo : data.sexo,
					proprietario : data.proprietario,
					veterinario : data.veterinario,
					image : data.image
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Animal
			.findOneAndRemove(id);
	return res;
};