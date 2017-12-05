'use strict';

const mongoose = require('mongoose');
const Teste = mongoose.model('Teste');
const moment = require('moment');

exports.get = async() => {
	const res = await 
		Teste
		.find({});
	return res;
};


exports.getByCodigo = async(codigo) => {
	const res = await 
		Teste
		.find({
				codigo: codigo
			  });
	return res;	
};

exports.getByDate = async(dtInicio, dtTermino) => {
	dtInicio = moment(dtInicio, "DD-MM-YYYY HH:mm").format('MM-DD-YYYY HH:mm');
	dtTermino = moment(dtTermino, "DD-MM-YYYY HH:mm").format('MM-DD-YYYY HH:mm');
	const res = await 
		Teste
		.find({
				dataCriacao : {$gte : dtInicio,
							   $lte:  dtTermino
							  }
			  });
	return res;	
};

exports.getById = async(id) => {
	const res = await
		Teste
		.findById(id);
	return res;
};

exports.create = async(data) => {
	//data.dataValidade = moment(data.dataCriacao, "DD/MM/YYYY").format('MM-DD-YYYY');
	//data.dataCriacao = moment(data.dataCriacao, "DD-MM-YYYY HH:mm").format('MM-DD-YYYY HH:mm');
	var teste = new Teste(data);
	const res = await teste.save();
	return {status: 200, message : 'Deu certo', data: res};
};