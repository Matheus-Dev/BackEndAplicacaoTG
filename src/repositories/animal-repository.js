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
	if(res.length == 0){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.getPorHaras = async(id) => {
	const res = await 
		Animal
		.find({
			haras: id		})
		.populate('haras', 'codigo razaoSocial proprietario.nome')
		;

	if(res.length == 0){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
	
};

exports.getValidos = async(id) => {
	const res = await 
		Animal
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
		Animal
		.findOne({
				nome: new RegExp('^'+nome+'$', "i")
			  });
	if(!res){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.getById = async(id) => {
	const res = await
		Animal
		.findById(id)
		.populate('proprietario','nome -_id')
		;
	if(!res){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.create = async(data) => {
	data.dataNascimento = moment(data.dataNascimento).format('MM-DD-YYYY');
	var animal = new Animal(data);
	const res = await animal.save();
	return {status: 200, message : 'Animal Adicionado com Sucesso!', data: res};
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
					image : data.image,
					isAtivo: data.isAtivo,
					haras: data.haras
				}
			});
	return {status: 200, message : 'Animal Adicionado com Sucesso!', data: res};
};

exports.delete = async(id) => {
	const res = await Animal
			.findOneAndRemove(id);
	return {status: 200, message : 'Animal Adicionado com Sucesso!', data: res};
};