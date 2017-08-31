const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: ['babel-polyfill', './handler.js'],
    target: 'node',
    devtool: 'source-map',
    externals: [nodeExternals()],
    module: {
        loaders: [
            {
                loaders: ['babel-loader'],
                include: __dirname,
                exclude: [
                    /node_modules/,
                    /_serverless.*$/,
                ],
            },
        ],
    },
}
