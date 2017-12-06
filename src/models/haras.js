'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const schema = new Schema({
	codigo : {
		type : Number,
		unique : true
	},
	razaoSocial : {
		type : String,
		required : true
	},
	inscricaoEstadual : {
		type : String,
		required : true,
		unique: true
	},
	registrou : {
		type : Boolean,
		default: false
	},
	proprietario : { 
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
		email: {
			type : String,
			required : true
		}
	},
	endereco : {
		type: Object
	}
});

schema.plugin(autoIncrement.plugin, { model: 'Haras', field: 'codigo', startAt: 1, });
module.exports = mongoose.model('Haras', schema);