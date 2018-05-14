var express = require('express');
var client = require('./../client');

var router = express.Router();

router.post('/', (req, res, next) => {
	client
		.sendMessage(req.body.message.chat.id, 'I\'m a bot, so what?')
		.promise()
		.then(function(){
			res.json({ ok: true });
		})
		.catch(next);
});

module.exports = router;
