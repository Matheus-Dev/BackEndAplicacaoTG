'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	codigo : {
		type : String,
		required : true
	},
	nome : {
		type : String,
		required : true
	},
	dataNascimento : {
		type : Date,
		required : true
	},
	raca : {
		type : String,
		required : true
	},
	sexo : {
		type : String,
		required : true
	},
	proprietario : { 
		type: Schema.Types.ObjectId, 
		ref: 'Proprietario' 
	},
	veterinario : { 
		type: Schema.Types.ObjectId, 
		ref: 'Veterinario' 
	},
	image : {
		type : String,
		default : 'assets/imgs/cavalo.png'
	},
	haras : {
		type: Schema.Types.ObjectId, 
		ref: 'Haras' 
	}
});

module.exports = mongoose.model('Animal', schema);