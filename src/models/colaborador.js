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
	login : {
		type : String,
		required : true
	},
	senha : {
		type : String,
		required : true
	},
	funcao : {
		type : String,
		required : true
	},
	admin : {
		type : Boolean,
		default: false
	},
	endereco : { 
		type: Object,
		required: true
	},
	isAtivo : {
		type : Boolean,
		default : true
	},
	haras : {
		type: Schema.Types.ObjectId, 
		ref: 'Haras' 
	}
});

module.exports = mongoose.model('Colaborador', schema);