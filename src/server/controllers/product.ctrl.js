'use strict';
let logger = require('log4js'),
    express = require("express"),
    router = express.Router(),
    Products = require("../models/product.model.js");

router.get('/', (req, res) => {
    Products.fetchAll().then((products)=> {
        res.send(products);
    });
});

module.exports = router;