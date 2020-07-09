const webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: ['./server/index.js'],
    output: {
        path: './dist',
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
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
