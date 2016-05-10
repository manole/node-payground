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
                include: /^src\/client/,
                exclude: /'node_modules|server'/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-decorators"]
                }
            }
        ]
    },
    watch: true
};

