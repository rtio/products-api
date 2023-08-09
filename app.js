'use strict'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');

var app = express();

const Error500 = { code: 500, error: 'Internal Server Error' };

function error(err, req, res, next) {
    // log it
    if (!test) console.error(err.stack);
  
    // respond with 500 "Internal Server Error".
    res.status(500);
    res.json(Error500);
  }

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);

// the error handler is placed after routes
// if it were above it would not receive errors
// from app.get() etc
app.use(error);

module.exports = app;
