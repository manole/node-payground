'use strict';
let webpack = require('webpack');

module.exports = {
    entry: "./src/client/app.js",
    output: {
        filename: "./.dist/bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: 'node_modules',
            }
        ]
    },
    watch: true
};

