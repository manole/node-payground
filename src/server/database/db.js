"use strict";
let dbConfig = require('../config/db.config');
let appConfig = require('../config/app.config');
let schema = require('./schema');
let logger = require('log4js').getLogger();

// initialize knex client
let knex = require('knex')(dbConfig);

// update schema
if (appConfig.dbClean === true) {

    schema.dropIfExists(knex).catch((err) => {
        logger.log('database could have not been cleaned: ', err);
    });

    schema.create(knex).catch((err) => {
        logger.log(err, 'database could have not been created', err);
    });
}

// export database provider
module.exports = knex;