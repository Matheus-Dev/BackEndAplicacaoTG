'use strict';

const mongoose = require('mongoose');
const Alimento = mongoose.model('Alimento');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Alimento
		.find({});
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Alimento
		.find({
				nome: nome
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Alimento
		.findById(id);
	return res;
};

exports.create = async(data) => {
	data.dataValidade = moment(data.dataValidade, "DD/MM/YYYY").format('MM-DD-YYYY');
	var alimento = new Alimento(data);
	const res = await alimento.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Alimento
			.findByIdAndUpdate(id, {
				$set: {
					tipo : data.tipo,
					marca : data.marca,
					codigoBarras : data.codigoBarras,
					unidade : data.unidade,
					dataValidade : data.dataValidade					
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Alimento
			.findOneAndRemove(id);
	return res;
};