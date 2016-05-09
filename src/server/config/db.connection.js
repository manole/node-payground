"use strict";
let dbConfig = require('./db.config.json');
let appConfig = require('./app.config.json');
let schema = require('./db.schema');
let logger = require('log4js').getLogger();
let bookshelf = require('bookshelf');

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

// export bookshelf database provider
module.exports = bookshelf(knex);