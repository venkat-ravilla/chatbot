"use strict";
const debug = process.env.NODE_ENV !=="production";
const {resolve} = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname,'./src'),
    devtool: debug?'inline-source-map':null,
    entry: ["webpack-dev-server/client?http://localhost:8080/",
            "webpack/hot/dev-server",
            "./index.js"],
    output: {
        path: resolve(__dirname,'dist'),
        filename: 'bundle.min.js',
        publicPath:"/build/"
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader: "babel-loader",
                query: {
                    plugins:['react-html-attrs','transform-class-properties','transform-decorators-legacy']
                }
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                loader: 'style!css?importLoaders=1!postcss'
            }
        ]
    },
    devServer:{
        inline:true,
        hot:true
    },
    plugins: debug ? [new webpack.HotModuleReplacementPlugin()] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })/*,
        new ExtractTextPlugin({ filename: './dist/bundle.css', disable: false, allChunks: true })*/
    ]
}
