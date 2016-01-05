'use strict';

var _ = require('lodash');
var config = require('../../config/environment');

var api_key = config.mailgun.apiKey;
var domain = config.mailgun.domain;

var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

exports.send = function(req, res) {
  var message = {
    from: req.body.email,
    to: 'camwhite1785@gmail.com',
    subject: 'DM from personal site',
    html: req.body.message
  };
  mailgun.messages().send(message, function(err, body) {
    if(err) { return res.status(500).send(err); }
    return res.status(200).send('Added to list');
  });
};

