'use strict';

const mongoose = require('mongoose');
const Haras = mongoose.model('Haras');

exports.get = async() => {
	const res = await 
		Haras
		.find({});

	if(res.length == 0){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.getByNome = async(nome) => {
	const res = await 
		Haras
		.find({
				nome: nome
			  });

	if(!res){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.getById = async(id) => {
	const res = await
		Haras
		.findById(id);

	if(!res){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.getHarasRegistrado = async(id) => {
	const res = await Haras
			.findById(id);

	if(res == null){
		return {status: 404, message: 'Erro: Chave Inválida!'};
	}
	if(res.registrou == true){
		return {status: 201, message: 'Erro: Esta Chave já foi utilizada!'};
	}else{
		return {status: 200, message: 'Chave Válida', data: res};
	} 
};

exports.create = async(data) => {
	var haras = new Haras(data);
	const res = await haras.save();
	return {status: 200, message : 'Pré Cadastro Realizado com Sucesso!', data: res};
};

exports.update = async(id, data) => {
	const res = await Haras
			.findByIdAndUpdate(id, {
				$set: {
					razaoSocial : data.razaoSocial,
					inscricaoEstadual : data.inscricaoEstadual,
					proprietario : data.proprietario,
					endereco : data.endereco,
					registrou: true
				}
			});
	return {status: 200, message : 'Haras Cadastrado com sucesso', data: res};
};

exports.delete = async(id) => {
	const res = await Haras
			.findOneAndRemove(id);
	return {status: 200, message : 'Haras Excluído Com Sucesso!', data: res};
};