'use strict';
let knex = require("../config/db.js");

module.exports.findAll = () => {
    return knex("products").select();
};