'use strict';

const mongoose = require('mongoose');
const Contato = mongoose.model('Contato');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Contato
		.find({}, 'nome data telefone');
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Contato
		.find({
				nome: nome
			  },'nome data telefone');
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Contato
		.findById(id, 'nome data telefone');
	return res;
};

exports.create = async(data) => {
	data.data = moment(data.data, "DD/MM/YYYY").format('MM-DD-YYYY');
	var contato = new Contato(data);
	const res = await contato.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Contato
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					data : moment(data.data, "DD/MM/YYYY").format('MM-DD-YYYY'),
					telefone : data.telefone
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Contato
			.findOneAndRemove(id);
	return res;
};