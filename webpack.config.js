var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    // context: __dirname + "/app",
    entry: {
        home: "./js/home"
    },
    output: {
        filename: 'build.js',
        path: path.join(__dirname, './build'),
        publicPath: '/build/'
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    watch: true,
    devtool: "source-map",
    module: {
        loaders: [
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
            "style",
            "css!sass")
        },
        { 
            test: /\.html$/, 
            loader: "underscore-template-loader"
        }
        ]
    }
};