const webpack = require('webpack');
const path = require('path');

module.exports = {
    target: 'node',
    entry: ['./server/index.js', './node_modules/webpack/hot/poll?1000'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    externals: [/^[a-z]/],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map',
};
