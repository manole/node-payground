'use strict';
let logger = require('log4js').getLogger(),
    express = require("express"),
    productController = require('./controllers/product.ctrl.js'),
    config = require("./config/app.config.json");

let    app = express();

app.use('/products', productController);
app.use('/', express.static('../client'));

app.listen(8083, () => {
    logger.debug(`server is up on port ${8083}`);
});

