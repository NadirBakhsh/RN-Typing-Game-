const express = require('express');

const router = express.Router();

router.use('/user',require('./user.js'));
router.use('/score',require('./scores.js'));
//router.use('/user',require('./post.js'))


module.exports = router