'use strict';
let logger = require('log4js'),
    express = require("express"),
    products = require('./controllers/product.js');

let log = logger.getLogger(),
    app = express();

app.use('/products', products);

app.listen(9000, () => {
    log.debug(`server is up on port ${9000}`);
});
