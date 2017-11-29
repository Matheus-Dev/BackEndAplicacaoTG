'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	marca : {
		type : String,
		required : true
	},
	tipo : {
		type : String,
		required : true
	},
	codigoBarras : {
		type : String,
		required : true
	},
	unidade : {
		type : String,
		required : true
	},
	dataValidade : { 
		type: Date, 
		required : true
	},
	haras : {
		type: Schema.Types.ObjectId, 
		ref: 'Haras' 
	}
});

module.exports = mongoose.model('Alimento', schema);