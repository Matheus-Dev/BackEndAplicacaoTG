'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require('./config');

const app = express();

//var connection = mongoose.connect(config.connectionString);
var connection = mongoose.connect(process.env.CONNECT_STRING_DB);
autoIncrement.initialize(connection);

const Alimento = require('./models/alimento');
const Animal = require('./models/animal');
const Colaborador = require('./models/colaborador');
const Endereco = require('./models/endereco');
const Proprietario = require('./models/proprietario');
const Remedio = require('./models/remedio');
const Veterinario = require('./models/veterinario');
const Atividade = require('./models/atividade');
const Teste = require('./models/teste');
const Haras = require('./models/haras');

const indexRoute = require('./routes/index-route');
const alimentoRoute = require('./routes/alimento-route');
const animalRoute = require('./routes/animal-route');
const colaboradorRoute = require('./routes/colaborador-route');
const proprietarioRoute = require('./routes/proprietario-route');
const remedioRoute = require('./routes/remedio-route');
const veterinarioRoute = require('./routes/veterinario-route');
const atividadeRoute = require('./routes/atividade-route');
const testeRoute = require('./routes/teste-route');
const harasRoute = require('./routes/haras-route');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/',indexRoute);
app.use('/alimento',alimentoRoute);
app.use('/animal',animalRoute);
app.use('/colaborador',colaboradorRoute);
app.use('/proprietario',proprietarioRoute);
app.use('/remedio',remedioRoute);
app.use('/veterinario',veterinarioRoute);
app.use('/atividade',atividadeRoute);
app.use('/teste',testeRoute);
app.use('/haras',harasRoute);

module.exports = app;