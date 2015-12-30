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
            './src/animation.js'
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
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    }
}, {
    entry: {
        main: [
            './src/all.css'
        ]
    },
    output:{
        filename: 'public/css/[name].css'
    },
    module: {
        loaders: [
            {
                test: /\.css?$/,
                loader: "style-loader!css-loader",
                include: [
                    path.resolve(__dirname, "src"),
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("public/css/[name].css")
    ]
}];
