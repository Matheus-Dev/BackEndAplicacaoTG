'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	endereco : {
		type : String,
		required : true
	},
	bairro : {
		type : String,
		required : true
	},
	cidade : {
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