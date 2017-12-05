'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');


const schema = new Schema({
	codigo : {
		type : Number
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

schema.plugin(autoIncrement.plugin, { model: 'Servico', field: 'codigo', startAt: 1, });
module.exports = mongoose.model('Servico', schema);