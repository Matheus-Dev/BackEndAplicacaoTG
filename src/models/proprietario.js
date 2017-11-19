'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	nome : {
		type : String,
		required : true
	},
	cpf : {
		type : String,
		required : true
	},
	telefone : {
		type : String,
		required : true
	},
	endereco : { 
		
		endereco : {
		type : String,
		required : true
		},
		cidade : {
			type : String,
			required : true
		},
		bairro : {
			type : String,
			required : true
		},
		uf : {
			type : String,
			required : true
		},
		cep : {
			type : String,
			required : true
		},
		numero : {
			type : String,
			required : true
		},
	},
	haras : {
		type: Schema.Types.ObjectId, 
		ref: 'Haras' 
	}
});

module.exports = mongoose.model('Proprietario', schema);