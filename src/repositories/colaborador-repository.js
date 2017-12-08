'use strict';

const mongoose = require('mongoose');
const Colaborador = mongoose.model('Colaborador');

exports.get = async() => {
	const res = await 
		Colaborador
		.find({})
		.populate('haras')
		;
	return {status: 200, message : 'Dados Recuperados!', data: res};
};

exports.getByNome = async(nome) => {
	const res = await 
		Colaborador
		.find({
				nome: nome
			  });
	return res;	
};

exports.getPorHaras = async(id) => {
	const res = await 
		Colaborador
		.find({
			haras: id		})
		.populate('haras', 'codigo nomeFantasia proprietario.nome')
		;

	if(res.length == 0){
		return {status: 204, message : 'Nenhum Dado Encontrado'};
	}else{
		return {status: 200, message : 'Dados Recuperados', data: res};
	}
	
};

exports.getValidos = async(id) => {
	const res = await 
		Colaborador
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

exports.getById = async(id) => {
	const res = await
		Colaborador
		.findById(id);
	if(!res){
		return {status: 201, message : 'Nenhum colaborador encontrado!'};
	}else{
		return {status: 200, message : 'Dados recuperados!', data: res};		
	}
};

exports.create = async(data) => {
	var colaborador = new Colaborador(data);
	const res = await colaborador.save();

	return {status: 200, message : 'Colaborador cadastrado com Sucesso!', data: res};
};

exports.update = async(id, data) => {
	const res = await Colaborador
			.findByIdAndUpdate(id, {
				$set: {
					nome : data.nome,
					cpf : data.cpf,
					telefone : data.telefone,
					login : data.login,
					senha : data.senha,
					funcao : data.funcao,
					admin: data.admin,
					endereco : data.endereco,
					isAtivo : data.isAtivo,
					haras: data.haras
				}
			});
	return {status: 200, message : 'Colaborador Atualizado com Sucesso!', data: res};
};

exports.delete = async(id) => {
	const res = await Colaborador
			.findOneAndRemove(id);
	return {status: 200, message : 'Colaborador excluido com Sucesso!', data: res};
};

exports.authenticate = async(codHaras, login, senha) => {
	const res = await Colaborador
	.findOne({
		login: login
	})
	.populate({
		path: 'haras',
		match: {codigo : codHaras}
	});

	if(res == null){
		return {status: 201, message: 'Nenhum usuario encontrado!'};
	}
	if(res.haras == null){
		return {status: 201, message: 'Não existe usuário com esse login no haras informado!'};
	} 

	if(res.senha == senha && res.isAtivo == true){
		return {status: 200, data: res, message: 'Dados Válidos!!'};
	}else{
		return {status: 201, message: 'Login ou Senha Incorretos'};
	}
};