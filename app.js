var express = require('express');
var path = require('path');
var logger = require('morgan');
var randomstring = require('randomstring');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var message = require('./routes/message');

if (!process.env.TELEGRAM_API_TOKEN){
	throw new Error('No TELEGRAM_API_TOKEN set in environment variables.');
}

var client = require('./client');

var webhookToken = process.env.WEBHOOK_TOKEN || randomstring.generate(16);
client.setWebhook(process.env.BASE_URL + '/' + webhookToken);

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/' + webhookToken, message);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err
	});
});

module.exports = app;
