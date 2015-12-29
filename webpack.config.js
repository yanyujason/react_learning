var path = require('path');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            './src/main.js',
            './src/likeButton.js',
            './src/ticktock.js',
            './src/domNode.js'
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
            }
        ]
    }
};
