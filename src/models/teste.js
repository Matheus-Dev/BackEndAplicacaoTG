'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	codigo : {
		type : String,
		required : true
	},
	detalhesAtividade: {
		type: Object,
		required: true
	},
	dataCriacao: {
		type : Date,
		required : true,
		default: Date.now()
	}
});

module.exports = mongoose.model('Teste', schema);