'use strict';

const mongoose = require('mongoose');
const Haras = mongoose.model('Haras');

exports.get = async() => {
	const res = await 
		Haras
		.find({});
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Haras
		.find({
				nome: nome
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Haras
		.findById(id);
	return res;
};

exports.create = async(data) => {
	var haras = new Haras(data);
	const res = await haras.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Haras
			.findByIdAndUpdate(id, {
				$set: {
					nomeFantasia : data.nomeFantasia,
					razaoSocial : data.razaoSocial,
					inscricaoEstadual : data.inscricaoEstadual,
					proprietario : data.proprietario,
					endereco : data.endereco,
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Haras
			.findOneAndRemove(id);
	return res;
};