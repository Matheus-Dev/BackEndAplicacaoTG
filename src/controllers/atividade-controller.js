'use strict'

const mongoose = require('mongoose');
const Atividade = mongoose.model('Servico');
const PDFDocument = require('pdfkit');
const moment = require('moment');

const repositoryAtividade = require('../repositories/atividade-repository');
const repositoryHaras = require('../repositories/haras-repository');
const repositoryAnimal = require('../repositories/animal-repository');

exports.get = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.get();
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getAtividadesColaborador = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.getAtividadesColaborador(req.params.idColaborador, 
			req.params.idHaras, req.params.dtInicio, req.params.dtTermino);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getAtividadesAnimal = async(req, res, next) => {
	try{
		
		var dataAnimal = await repositoryAnimal.getByNome(decodeURI(req.query.nome));

		var dataAtividade = await repositoryAtividade.getAtividadesAnimal(dataAnimal.data._id,
		req.query.idHaras, req.query.dtInicio, req.query.dtTermino);

		var dataHaras = await repositoryHaras.getById(req.query.idHaras);

		if(dataAtividade.length > 0){

			await gerarRelatorio(dataAnimal, dataAtividade, dataHaras, res);			

		}else{
			res.status(404).send({
				message: 'Não foram encontradas atividades!'
			});
		}
		
	}catch (e) {
		console.log(e);
		res.status(400).send({
			message : 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getAtividadesProprietario = async(req, res, next) => {
	try{


		var data = await repositoryAtividade.getAtividadesProprietario(req.params.idProprietario,
		 req.params.idHaras, req.params.dtInicio, req.params.dtTermino);
		res.status(200).send(data);
	}catch (e) {
		res.status(400).send({
			message : 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getByCodigo = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.getByCodigo(req.params.codigo);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.getById = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.getById(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao buscar Atividades!', data:e
		});
	}
};

exports.post = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.create(req.body);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao cadastrar Atividade!', data:e
		});
	}
};

exports.put = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.update(req.params.id, req.body);
		res.status(data.status).send(data);

	}catch (e) {
		res.status(400).send({
			message: 'Falha ao atualizar o Atividade!', data:e
		});
	}
};

exports.delete = async(req, res, next) => {
	try{
		var data = await repositoryAtividade.delete(req.params.id);
		res.status(data.status).send(data);
	}catch (e) {
		res.status(400).send({
			message: 'Falha ao remover o Atividade!', data:e
		});
	}
};

async function gerarRelatorio (dataAnimal, dataAtividade, dataHaras, res) {

			var width = 792;
			var height = 792;

			var tamFont = 14;

			const doc = new PDFDocument({
				size: [864, 864]
			});

			console.log(dataAnimal.data);

	  		let filename = 'RelatorioServicosAnimal';
			filename = encodeURIComponent(filename) + '.pdf';
			res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
	  		res.setHeader('Content-type', 'application/pdf');

	  		doc.font('Times-BoldItalic').fontSize(30)
			.text('RELATÓRIO DE SERVIÇOS POR ANIMAL', {
				align: 'center'
			})
			;

			doc.moveDown(0.5);

			doc.moveTo(doc.x, doc.y)                              
	   		.lineTo(width, doc.y)
	   		.stroke()
	   		;

	   		doc.moveDown(0.5);

	   		doc.font('Times-Roman').fontSize(tamFont);

	   		doc.font('Times-BoldItalic').fontSize(24)
			.text('INFORMAÇÕES DO HARAS', {
				align: 'center'
			})
			;

	   		doc.moveDown(0.5);

	   		doc.moveTo(doc.x, doc.y)                              
	   		.lineTo(width, doc.y)
	   		.stroke()
	   		;

	   		doc.font('Times-Roman').fontSize(tamFont);

	   		doc.moveDown(1);

			doc
			.text('NOME DO HARAS: '+dataHaras.data.razaoSocial.toUpperCase(), {align: 'left',continued: false})
			.text('ENDEREÇO: '+dataHaras.data.endereco.logradouro.toUpperCase(), {align: 'left',continued: true})
			.text('NÚMERO: '+dataHaras.data.endereco.numero, {align: 'center',continued: false})
			.text('CEP: '+dataHaras.data.endereco.cep, {align: 'left',continued: true})
			.text('CIDADE: '+dataHaras.data.endereco.localidade.toUpperCase(), {align: 'center',continued: true})
			.text('UF: '+dataHaras.data.endereco.uf, {align: 'right',continued: false})
			.moveDown(1);
			;

			doc.moveTo(doc.x, doc.y)                              
	   		.lineTo(width, doc.y)
	   		.stroke()
	   		;

	   		doc.moveDown(1);

	   		doc.font('Times-BoldItalic').fontSize(24)
			.text('INFORMAÇÕES DO ANIMAL', {
				align: 'center'
			})
			;

			doc.moveTo(doc.x, doc.y)                              
	   		.lineTo(width, doc.y)
	   		.stroke()
	   		;

			doc.font('Times-Roman').fontSize(tamFont);

			doc.moveDown(1);

	   		doc
	   		.image(dataAnimal.data.image, doc.x, doc.y, {width: 168, height: 156})
		   	.rect(doc.x, doc.y-156, 168, 156)
		   	.stroke();

		   	doc
			.text('CHIP: '+dataAnimal.data.codigo, 250, doc.y-156,{continued: false, lineGap: 10})
			.text('NOME DO ANIMAL: '+dataAnimal.data.nome.toUpperCase(), 250, doc.y,{continued: false, lineGap: 10})
			.text('RAÇA: '+dataAnimal.data.raca.toUpperCase(), 250, doc.y, {continued: false, lineGap: 10})
			.text('SEXO: '+dataAnimal.data.sexo.toUpperCase(), 250, doc.y, {continued: false, lineGap: 10})
			.text('DATA DE NASCIMENTO: '+moment(dataAnimal.data.dataNascimento).format('DD/MM/YYYY'), 250, doc.y,{continued: false, lineGap: 10})
			.text('PROPRIETÁRIO: '+dataAnimal.data.proprietario.nome.toUpperCase(), 250, doc.y, {continued: false, lineGap: 10})
			.moveDown(1);
			;

			doc.moveDown(1);

			doc.x = 72;

			doc.moveTo(doc.x, doc.y)                              
	   		.lineTo(width, doc.y)
	   		.stroke()
	   		;

	   		doc.moveDown(1);

	   		doc.font('Times-BoldItalic').fontSize(24)
			.text('SERVIÇOS PRESTADOS', {
				align: 'center'
			})
			;

			doc.font('Times-Roman').fontSize(tamFont);

			for (var i = 0; i < dataAtividade.length; i++){

				var obj = dataAtividade[i];

				doc.moveDown(1);

				doc.moveTo(doc.x, doc.y)                              
		   		.lineTo(width, doc.y)
		   		.stroke()
		   		;

		   		doc.moveDown(1);

				doc
				.text('TIPO DE SERVIÇO: '+obj.tipo, 72, doc.y,{continued: true, lineGap: 10})
				.text('DATA DA REALIZAÇÃO: '+moment(obj.dataCriacao).format('DD/MM/YYYY'), 288, doc.y, {continued: false, lineGap: 10})
				.text('COLABORADOR RESPONSÁVEL: '+obj.colaborador.nome.toUpperCase(), 72, doc.y, {continued: false, lineGap: 10})
				;

				for (var key in obj.detalhesAtividade){
			        var attrName = key.toString().toUpperCase();
			        var attrValue = obj.detalhesAtividade[key].toString().toUpperCase();
			        doc
			        .text(attrName+': '+attrValue, 72, doc.y,{continued: false, lineGap: 10});
			    }

			    doc.moveDown(1);

			    doc.moveTo(doc.x, doc.y)                              
		   		.lineTo(width, doc.y)
		   		.stroke()
		   		;
			}

	  		doc.pipe(res);
			doc.end();
};