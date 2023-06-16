const router = require('express').Router();

router.get('/', require('./landingPage.js'));

module.exports = router;
