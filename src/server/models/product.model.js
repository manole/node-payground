'use strict';
let bookshelf = require("../config/db.connection.js");

module.exports = bookshelf.Model.extend({
    tableName: "products",
});