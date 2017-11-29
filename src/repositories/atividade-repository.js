'use strict';

const mongoose = require('mongoose');
const Atividade = mongoose.model('Servico');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Atividade
		.find({});
	return res;
};

exports.getByCodigo = async(codigo) => {
	const res = await 
		Atividade
		.find({
				codigo: codigo
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Atividade
		.findById(id);
	return res;
};

exports.getAtividadesAnimal = async(idAnimal, idHaras, dtInicio, dtTermino) => {
	const res = await
		Atividade
		.find({
			haras: idHaras,
			animal: idAnimal,
			dataCriacao : {
				$gte : dtInicio,
				$lte:  dtTermino
			}
		})
		.populate('colaborador', 'nome -_id')
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

exports.create = async(data) => {
	//data.dataCriacao = moment(data.dataCriacao).format('MM-DD-YYYY HH:mm -0200');
	var atividade = new Atividade(data);
	const res = await atividade.save();
	return res;
};

exports.update = async(id, data) => {
	const res = await Atividade
			.findByIdAndUpdate(id, {
				$set: {
					codigo : data.codigo,
					animal : data.animal,
					detalhesAtividade: data.detalhesAtividade,
					dataCriacao: data.dataCriacao,
					colaborador: data.colaborador
				}
			});
	return res;
};

exports.delete = async(id) => {
	const res = await Atividade
			.findOneAndRemove(id);
	return res;
};