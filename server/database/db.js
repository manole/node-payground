"use strict";
let config = require('../config/db.config.json'),
    mongoose = require("mongoose");

const uriString = 'mongodb://localhost/test',
    mongoOptions = {};

// use promises
mongoose.Promise =  global.Promise;;

// establish mongo db connection
mongoose.connect(uriString, mongoOptions, function (err, res) {
    if (err) {
        console.log('Error when connecting to: ' + uriString + '. ' + err);
    }
    else {
        console.log('Successfully connected to: ' + uriString);
    }
});

// export database provider
module.exports = mongoose;