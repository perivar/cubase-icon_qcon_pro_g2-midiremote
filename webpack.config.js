// https://medium.com/netscape/firebase-cloud-functions-with-typescript-and-webpack-7781c882a05b
// https://blog.logrocket.com/using-webpack-typescript/

'use strict'

// var nodeExternals = require('webpack-node-externals') // <-- Important

const path = require('path')

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                // options: {
                //     transpileOnly: true,
                // },
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        alias: {
            midiremote_api_v1: path.resolve(__dirname, '.api/v1'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'this', // <-- Important
        },
    },
    target: 'node', // <-- Important,
    // externals: [nodeExternals()], // <-- Important
    externals: ['midiremote_api_v1'],
}
