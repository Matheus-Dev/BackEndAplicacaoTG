'use strict';

const mongoose = require('mongoose');
const Remedio = mongoose.model('Remedio');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Remedio
		.find({});
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Remedio
		.find({
				nome: nome
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Remedio
		.findById(id);
	return res;
};

exports.create = async(data) => {
	data.dataValidade = moment(data.dataValidade, "DD/MM/YYYY").format('MM-DD-YYYY');
	var remedio = new Remedio(data);
	const res = await remedio.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Remedio
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					lote : data.lote,
					dataValidade : data.dataValidade,
					tipo : data.tipo,
					observacoes : data.observacoes
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Remedio
			.findOneAndRemove(id);
	return res;
};