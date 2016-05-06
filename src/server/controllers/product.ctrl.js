'use strict';
let logger = require('log4js'),
    express = require("express"),
    products = require("../models/product.model.js"),
    router = express.Router();

router.get('/', (req, res) => {
    products.findAll().then((users) => {
        res.send(users);
    });
});

module.exports = router;