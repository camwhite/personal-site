'use strict';

var express = require('express');
var controller = require('./email.controller');

var router = express.Router();

router.post('/', controller.send);

module.exports = router;
