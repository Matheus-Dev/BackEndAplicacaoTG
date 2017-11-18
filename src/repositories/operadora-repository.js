'use strict';

const mongoose = require('mongoose');
const Operadora = mongoose.model('Operadora');

exports.get = async() => {
	const res = await 
		Operadora
		.find({}, 'nome codigo categoria preco');
	return res;
};

exports.getByNome = async(nome) => {
	const res = await 
		Operadora
		.find({
				nome: nome
			  },'nome codigo categoria preco');
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Operadora
		.findById(id, 'nome codigo categoria preco');
	return res;
};

exports.create = async(data) => {
	var operadora = new Operadora(data);
	const res = await operadora.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Operadora
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					codigo : data.codigo,
					categoria : data.categoria,
					preco : data.preco
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Operadora
			.findOneAndRemove(id);
	return res;
};