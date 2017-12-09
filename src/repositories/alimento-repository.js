'use strict';

const mongoose = require('mongoose');
const Alimento = mongoose.model('Alimento');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Alimento
		.find({});

	if(res.length == 0){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.getPorHaras = async(id) => {
	const res = await 
		Alimento
		.find({
			haras: id		
		})
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
		Alimento
		.find({
			haras: id,
			isValido: true
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
		Alimento
		.findOne({
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
		Alimento
		.findById(id);

	if(!res){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.create = async(data) => {
	//data.dataValidade = moment(data.dataValidade, "DD/MM/YYYY").format('MM-DD-YYYY');
	var alimento = new Alimento(data);
	const res = await alimento.save();

	return {status: 200, message : 'Alimento Criado com Sucesso!', data: res};
};

exports.update = async(id, data) => {
	const res = await Alimento
			.findByIdAndUpdate(id, {
				$set: {
					tipo : data.tipo,
					marca : data.marca,
					codigoBarras : data.codigoBarras,
					unidade : data.unidade,
					dataValidade : data.dataValidade,
					isValido: data.isValido,
					haras: data.haras				
				}
			});
	return {status: 200, message : 'Alimento Atualizado Com Sucesso!', data: res};
};

exports.delete = async(id) => {
	const res = await Alimento
			.findOneAndRemove(id);
	return {status: 200, message : 'Alimetno Excluido com Sucesso!', data: res};
};