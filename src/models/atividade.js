'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	codigo : {
		type : String,
		required : true
	},
	tipo : {
		type : String,
		required : true
	},
	animal: {
		type: Schema.Types.ObjectId, 
		ref: 'Animal'
	},
	detalhesAtividade: {
		type: Object,
		required: true
	},
	dataCriacao: {
		type : Date,
		required : true,
		default: Date.now()
	},
	colaborador: {
		type: Schema.Types.ObjectId, 
		ref: 'Colaborador'
	},
	haras : {
		type: Schema.Types.ObjectId, 
		ref: 'Haras' 
	}
});

module.exports = mongoose.model('Servico', schema);