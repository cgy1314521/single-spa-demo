const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/spaConfig.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
    }, 
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [ 'babel-loader' ]
        }, {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [ 'ts-loader' ]
        }, {
            test: /\.less$/,
            use: [ 'style-loader', 'css-loader', 'less-loader' ]
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 6000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    // todo  /^@app\/*/ 啥意思
    externals: [
        /^@app\/*/
    ]
}