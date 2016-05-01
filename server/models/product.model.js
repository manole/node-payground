'use strict';
let mongoose = require("../database/db.js");

let product = mongoose.model('Product', { name: String });

module.exports = product;