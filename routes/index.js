var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.json({ ok: true });
});

module.exports = router;
