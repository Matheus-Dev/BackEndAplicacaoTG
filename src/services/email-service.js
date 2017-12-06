'use strict'

const config = require('../config');
const sgMail = require('@sendgrid/mail');

const apiKey = process.env.SENDGRID_APIKEY;

sgMail.setApiKey(apiKey);

exports.send = async (to, subject, body) => {

	const msg = {
  		to: to,
  		from: 'support.registro@harasmobile.com',
  		subject: subject,
  		text: 'Chave de Registro - HarasMobile',
  		html: body
	};

	sgMail.send(msg).then(() => {
    //Celebrate
	  })
	  .catch(error => {

	    //Log friendly error
	    console.error(error.toString());

	    //Extract error msg
	    const {message, code, response} = error;

	    //Extract response msg
	    const {headers, body} = response;
	  });

}
