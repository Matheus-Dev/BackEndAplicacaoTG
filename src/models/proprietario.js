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
		type: Object,
		required: true
	},
	haras : {
		type: Schema.Types.ObjectId, 
		ref: 'Haras' 
	},
	isAtivo : {
		type : Boolean,
		default : true
	}
});

module.exports = mongoose.model('Proprietario', schema);