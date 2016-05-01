'use strict';
let logger = require('log4js'),
    express = require("express"),
    product = require("../models/product.model.js"),
    router = express.Router();

router.get('/', (req, res) => {
    product.findById('123').then((response) => {
        console.log(response, "response");
    }).catch((err) => {
        console.log(err, "err");
    });
    res.send('hello from products');
});

module.exports = router;


