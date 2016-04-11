'use strict';
let logger = require('log4js'),
    express = require("express"),
    router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from products');
});


module.exports = router;


