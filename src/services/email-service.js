'use strict'

var config = require('../config');
var sendgrid = require('sendgrid')(process.env.SENDGRID_APIKEY);

exports.send = async (to, subject, body) => {

	sendgrid.send()({
		to: to,
		from: 'matheusaugusto.dev@gmail.com',
		subject: subject,
		html: body

	});

}
