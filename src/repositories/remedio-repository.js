'use strict';

const mongoose = require('mongoose');
const Remedio = mongoose.model('Remedio');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Remedio
		.find({});
	return {status: 200, message : 'Dados Recuperados', data: res};
};

exports.getPorHaras = async(id) => {
	const res = await 
		Remedio
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
		Remedio
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
		Remedio
		.find({
				nome: nome
			  });
	return {status: 200, message : 'Dados Recuperados', data: res};	
};

exports.getById = async(id) => {
	const res = await
		Remedio
		.findById(id);
	return {status: 200, message : 'Dados Recuperados', data: res};
};

exports.create = async(data) => {
	//data.dataValidade = moment(data.dataValidade, "DD/MM/YYYY").format('MM-DD-YYYY');
	var remedio = new Remedio(data);
	const res = await remedio.save();
	return {status: 200, message : 'Remedio Cadastrado com Sucesso', data: res};
};

exports.update = async(id, data) => {
	const res = await Remedio
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					lote : data.lote,
					dataValidade : data.dataValidade,
					tipo : data.tipo,
					observacoes : data.observacoes,
					isValido: data.isValido
				}
			});
	return {status: 200, message : 'Remedio Atualizado com Sucesso', data: res};
};

exports.delete = async(id) => {
	const res = await Remedio
			.findOneAndRemove(id);
	return {status: 200, message : 'Remédio Excluído com Sucesso', data: res};
};