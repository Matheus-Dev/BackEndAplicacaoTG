'use strict';

const mongoose = require('mongoose');
const Proprietario = mongoose.model('Proprietario');

exports.get = async(id) => {
	const res = await 
		Proprietario
		.find({
		})
		.populate('haras', 'codigo razaoSocial proprietario.nome')
		;

	if(res.length == 0){
		return {status: 404, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
	
};

exports.getPorHaras = async(id) => {
	const res = await 
		Proprietario
		.find({
			haras: id		})
		.populate('haras', 'codigo razaoSocial proprietario.nome')
		;

	if(res.length == 0){
		return {status: 404, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
	
};

exports.getValidos = async(id) => {
	const res = await 
		Proprietario
		.find({
			haras: id,
			isAtivo: true
		})
		.populate('haras', 'codigo nomeFantasia proprietario.nome')
		;

	if(res.length == 0){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
	
};

exports.getByNome = async(nome) => {
	const res = await 
		Proprietario
		.find({
				nome: nome
			  });

	if(res.length == 0){
		return {status: 404, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
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
	return {status: 200, message : 'Proprietario cadastrado com Sucesso', data: res};
};

exports.update = async(id, data) => {
	const res = await Proprietario
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					cpf : data.cpf,
					telefone : data.telefone,
					endereco : data.endereco,
					isAtivo: data.isAtivo
				}
			});
	return {status: 200, message : 'Proprietario Atualizado com Sucesso', data: res};
};

exports.delete = async(id) => {
	const res = await Proprietario
			.findOneAndRemove(id);
	return {status: 200, message : 'Proprietario excluido com Sucesso', data: res};
};