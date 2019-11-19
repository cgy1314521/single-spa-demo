const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./webpack.base');

config.mode = 'development';

config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: 'http://localhost:7005/'
};

config.devServer = {
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'),
    port: 7005,
    historyApiFallback: true
};

config.plugins = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    }),
];

module.exports = config;