const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        globalObject: "this"
    },
    mode: 'development',

    devServer: {
        proxy: {},
        hot: true,
        host: '10.80.10.69',
        hotOnly: true,
        port: 3000
    },
    devtool: '#eval-source-map',
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]-[local]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/, // Only .css files
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ] //'style!css' // Run both loaders
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'react app',
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
}
