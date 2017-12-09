'use strict';

const mongoose = require('mongoose');
const Atividade = mongoose.model('Servico');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Atividade
		.find({})
		.populate('animal');
	if(res.length == 0){
		return {status: 404, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.getByCodigo = async(codigo) => {
	const res = await 
		Atividade
		.findOne({
				codigo: codigo
			  });

	if(!res){
		return {status: 404, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}	
};

exports.getById = async(id) => {
	const res = await
		Atividade
		.findById(id);

	if(!res){
		return {status: 404, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
};

exports.getAtividadesAnimal = async(id, idHaras) => {
	const res = await
		Atividade
		.find({
			animal : id,
			haras: idHaras
			/*dataCriacao : {
				$gte : dtInicio,
				$lte:  dtTermino
			}*/
		}, 'codigo tipo animal detalhesAtividade dataCriacao colaborador haras')
		.populate('colaborador', 'nome login funcao -_id')
		.populate('haras', '-proprietario')
		;
	return res;
};

exports.getAtividadesColaborador = async(idColaborador, idHaras, dtInicio, dtTermino) => {
	const res = await
		Atividade
		.find({
			haras: idHaras,
			colaborador: idColaborador,
			dataCriacao : {
				$gte : dtInicio,
				$lte:  dtTermino
			}
		})
		.populate('colaborador', 'nome -_id')
		;
	return res;
};

exports.getAtividadesProprietario = async(id, idHaras) => {
	const res = await
		Atividade
		.find({
			haras : idHaras
			/*dataCriacao : {
				$gte : dtInicio,
				$lte:  dtTermino
			}*/
		}, 'codigo tipo animal detalhesAtividade dataCriacao colaborador haras')
		.populate('colaborador', 'nome login funcao -_id')
		.populate({
			path: 'animal',
			match: {colaborador : id},
			select: 'nome raca sexo'
		})
		.populate('haras')
		;

	return res;
};

/*
exports.getAtividadesProprietario = async(idProprietario, idHaras, dtInicio, dtTermino) => {
	const res = await
		Atividade
		.find({
			haras: idHaras,
			dataCriacao : {
				$gte : dtInicio,
				$lte:  dtTermino
			}
		})
		.populate({
			path: 'animal',
			match: {proprietario : idProprietario},
			select: 'nome raca -_id'
		})
		.populate('colaborador', 'nome -_id')
		;
	return res;
};
*/
exports.create = async(data) => {
	data.dataCriacao = moment(data.dataCriacao).format('MM-DD-YYYY HH:mm:ss -0300');
	var atividade = new Atividade(data);
	const res = await atividade.save();
	return {status: 200, message : 'Atividade Criada com Sucesso!', data: res};
};

exports.update = async(id, data) => {
	const res = await Atividade
			.findByIdAndUpdate(id, {
				$set: {
					animal : data.animal,
					detalhesAtividade: data.detalhesAtividade,
					colaborador: data.colaborador
				}
			});
	return {status: 200, message : 'Atividade Atualizada com Sucesso!', data: res};
};

exports.delete = async(id) => {
	const res = await Atividade
			.findOneAndRemove(id);
	return {status: 200, message : 'Atividade Excluida com Sucesso!', data: res};
};