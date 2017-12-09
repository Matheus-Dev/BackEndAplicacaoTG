'use strict';

const mongoose = require('mongoose');
const Veterinario = mongoose.model('Veterinario');

exports.get = async() => {
	const res = await 
		Veterinario
		.find({})
		.populate('haras','codigo razaoSocial proprietario.nome')
		;
	return {status: 200, message : 'Dados Recuperados', data: res};
};

exports.getPorHaras = async(id) => {
	const res = await 
		Veterinario
		.find({
			haras: id		
		})
		//.populate('haras', 'codigo razaoSocial proprietario.nome')
		;

	if(res.length == 0){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
	
};

exports.getValidos = async(id) => {
	const res = await 
		Veterinario
		.find({
			haras: id,
			isAtivo: true
		})
		.populate('haras', 'codigo razaoSocial proprietario.nome')
		;

	if(res.length == 0){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
	
};

exports.getByNome = async(nome) => {
	const res = await 
		Veterinario
		.find({
				nome: nome
			  });
	return {status: 200, message : 'Dados Recuperados', data: res};	
};

exports.getById = async(id) => {
	const res = await
		Veterinario
		.findById(id);
	return {status: 200, message : 'Dados Recuperados', data: res};
};

exports.create = async(data) => {
	var veterinario = new Veterinario(data);
	const res = await veterinario.save();
	return {status: 200, message : 'Veterinário Cadastrado com Sucesso', data: res};
};

exports.update = async(id, data) => {
	const res = await Veterinario
			.findByIdAndUpdate(id, {
				$set: {
					nome: data.nome,
					cpf: data.cpf,
					crmv: data.crmv,
					telefone: data.telefone,
					endereco: data.endereco,
					isAtivo: data.isAtivo
				}
			});
	return {status: 200, message : 'Veterinário Atualizado com Sucesso!', data: res};
};

exports.delete = async(id) => {
	const res = await Veterinario
			.findOneAndRemove(id);
	return {status: 200, message : 'Veterinário Excluido com Sucesso!', data: res};
};