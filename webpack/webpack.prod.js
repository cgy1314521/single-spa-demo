const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./webpack.base');

config.mode = 'production';

config.output = {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: 'http://118.31.111.115:7000/'
};

config.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
];

module.exports = config;