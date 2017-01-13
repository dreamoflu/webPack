var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require("path");
var ROOT_PATH = path.resolve(__dirname);
module.exports = {
    entry: {
    },
    output: {
        path: "./dist",
        filename: "js/[name].build.js"
    },
    devtool:"#cheap-module-source-map",
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            }, {
                test: /\.(eot|woff|ttf)$/,
                loader: "file-loader"
            },
            {　 test: /\.html$/, 　　　　　　
                loader: 'html-withimg-loader'　　　　 
            }, 
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            }
        ]

    },
    resolve: {
        alias: {
        }
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            //root: ROOT_PATH,
            verbose: true,
            //dry: false,
            //exclude: ["dist/1.chunk.js"]
        }),
        
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: 'index.html',
            template: './src/pages/index.html',
            hash: true, //为静态资源生成hash值
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin("css/[name].css"),
    ]
};
