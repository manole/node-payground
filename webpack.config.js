'use strict';
let webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/client/app.ts'
    },
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {loader: 'ts-loader', exclude: /node_modules|server/},
            {loader: 'raw', test: /\.tpl\.html$/}
        ]
    },
    watch: true
};

