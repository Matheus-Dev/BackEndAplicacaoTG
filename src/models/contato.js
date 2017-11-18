'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	nome : {
		type : String,
		required : true
	},
	telefone : [{
		type : String,
		required : true		
	}],
	data : {
		type : Date,
		required : true,
		default : new Date()
	}
});

module.exports = mongoose.model('Contato', schema);