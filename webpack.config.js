var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [{
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            './src/main.js',
            './src/likeButton.js',
            './src/ticktock.js',
            './src/domNode.js',
            './src/animation.js',
            './src/imageCarousel.js'
        ]
    },

    output: {
        filename: 'public/js/[name].js'
    },

    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                exclude: /(node_modules|bower_components)/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['react', 'es2015']
                }
            },
        ]
    }
}];
