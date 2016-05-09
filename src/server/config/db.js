"use strict";
let dbConfig = require('db.config.json');
let appConfig = require('app.config.json');
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