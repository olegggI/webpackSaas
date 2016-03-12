var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var bower_dir = __dirname + '/bower_components';
var webpack = require('webpack');

module.exports = {
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
        , new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    watch: true,
    devtool: "source-map",
    resolve: {
        modulesDirectories: ['css/saas', 'html', 'bower_components'],
        alias: {
            jquery: "jquery/jquery",
                touchSwipe: "jquery-touchswipe/jquery.touchSwipe"
        }
    },
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