const webpack = require('webpack');

const config = {
    entry:  __dirname + "/js/index.jsx",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
        ]
    }
};
module.exports = config;