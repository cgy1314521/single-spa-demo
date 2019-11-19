// 独立开发环境配置
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.base');

config.mode = 'development';

config.output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'lol-app.js',
    publicPath: '/'
};

config.devServer = {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 6002,
    historyApiFallback: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
};

config.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'DEV_ENV': JSON.stringify('app')
        }
    })
];

module.exports = config;