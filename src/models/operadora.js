'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	nome : {
		type : String,
		required : true
	},
	codigo : {
		type: Number,
		required : true
	},
	categoria : {
		type: String,
		required : true
	},
	preco : {
		type : Number,
		required : true
	}
});

module.exports = mongoose.model('Operadora', schema);