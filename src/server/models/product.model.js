'use strict';
let knex = require("../database/db.js");

module.exports.findAll = () => {
    return knex("products").select();
};