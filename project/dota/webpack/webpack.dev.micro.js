// 微服务开发环境配置

const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.base');

config.mode = 'development';

config.output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'dota-app.js',
    libraryTarget: 'umd',
    library: 'dota',
    publicPath: 'http://localhost:6001/'
};

config.devServer = {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 6001,
    historyApiFallback: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
};

config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'DEV_ENV': JSON.stringify('micro')
        }
    })
];

module.exports = config;