'use strict';
let logger = require('log4js'),
    express = require("express"),
    productController = require('./controllers/product.ctrl.js');

let log = logger.getLogger(),
    app = express();

app.use('/products', productController);

app.listen(9000, () => {
    log.debug(`server is up on port ${9000}`);
});

