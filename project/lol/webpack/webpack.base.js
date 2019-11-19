const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
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
    externals: [
        /^@app\/*/
    ]
}