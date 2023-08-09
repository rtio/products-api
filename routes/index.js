'use strict'

var express = require('express');
var router = express.Router();

const NotFound404 = { code: 404, message: 'Not found' };

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(404).json(NotFound404);
});

module.exports = router;
