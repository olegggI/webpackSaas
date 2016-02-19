var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    // context: __dirname + "/app",
    entry: {
        home: "./js/home",
        style: "./css/style"
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './build'),
        publicPath: '/build'
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    watch: true,
    watchOptions: {
    	aggregateTimeout: 100
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
            "style",
            "css!sass")
        }]
    }
};