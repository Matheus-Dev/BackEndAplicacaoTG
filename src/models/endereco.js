'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	logradouro : {
		type : String,
		required : true
	},
	bairro : {
		type : String,
		required : true
	},
	localidade : {
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
});

module.exports = mongoose.model('Endereco', schema);