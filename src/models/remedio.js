'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	nome : {
		type : String,
		required : true
	},
	lote : {
		type : String,
		required : true
	},
	dataValidade : {
		type : Date,
		required : true
	},
	tipo : {
		type : String,
		required : true
	},
	observacoes : { 
		type: String, 
	},
	haras : {
		type: Schema.Types.ObjectId, 
		ref: 'Haras' 
	}
});

module.exports = mongoose.model('Remedio', schema);