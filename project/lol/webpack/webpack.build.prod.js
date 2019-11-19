// 线上打包配置，微服务和独立部署可使用相同的包文件

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./webpack.base');

config.mode = 'production';

config.output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'lol-app.[hash].js',
    chunkFilename: '[name].[hash].js',
    libraryTarget: 'umd',
    library: 'lol',
    publicPath: 'http://118.31.111.115:7002/'
}

config.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'DEV_ENV': JSON.stringify('PROD')
        }
    })
];

module.exports = config;