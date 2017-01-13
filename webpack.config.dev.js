var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require("path");
var ROOT_PATH = path.resolve(__dirname);
module.exports = {
    entry: {
        "index":"./src/js/index.js",
    },
    output: {
        path: "./dist",
        filename: "js/[name].build.js"
    },
    devtool: "#cheap-module-eval-source-map",
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(eot|woff|ttf)$/,
            loader: "file-loader"
        }, {　
            test: /\.html$/,
            　　　　　　
            loader: 'html-withimg-loader'　　　　
        }, {
            test: /\.png$/,
            loader: "url-loader?mimetype=image/png"
        }]

    },
    resolve: {
        alias: {
            js: path.join(__dirname, "src/js"),
            css: path.join(__dirname, "src/css"),
        }
    },

    plugins: [
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: 'index.html',
            template: './src/pages/index.html',
            hash: false, //为静态资源生成hash值
            chunks: ["index"],
        }),
        new ExtractTextPlugin("css/[name].css"),
    ]
};
