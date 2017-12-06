'use strict'

/*var config = require('../config');
var sendgrid = require('sendgrid')(process.env.SENDGRID_APIKEY);

exports.send = async (to, subject, body) => {

	sendgrid.send()({
		to: to,
		from: 'matheusaugusto.dev@gmail.com',
		subject: subject,
		html: body

	});

}*/

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.send = async (to, subject, body) => {

	msg = {
  		to: to,
  		from: 'matheusaugusto.dev@gmail.com',
  		subject: subject,
  		text: 'Chave de Registro - HarasMobile',
  		html: body
	};

	sgMail.send(msg);

}
