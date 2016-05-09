'use strict';
let logger = require("log4js").getLogger();

module.exports.create = function (knex) {
    return Promise.all([
        // create base structure
        knex.schema.createTable('products', (table) => {
            table.increments();
            table.string('name');
            table.timestamps();
        })
    ]).then(() => Promise.all([
        // populate initial structure
        knex("products").insert({name: "Yogurt"})
    ]));
};

module.exports.dropIfExists = function (knex) {
    return Promise.all([
        knex.schema.dropTableIfExists("products")
    ]);
};