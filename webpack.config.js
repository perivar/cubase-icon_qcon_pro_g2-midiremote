// https://medium.com/netscape/firebase-cloud-functions-with-typescript-and-webpack-7781c882a05b
// https://blog.logrocket.com/using-webpack-typescript/

'use strict'

const path = require('path')

module.exports = {
    entry: './src/index.ts',
    target: ['web', 'es5'], // <-- Include this for es5 output
    externals: 'midiremote_api_v1',
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     loader: 'remove-comments-loader',
            // },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: false, // make sure to keep the format for readabilty
        moduleIds: 'named', // use the filename as module-ids
    },
    resolve: {
        alias: {
            midiremote_api_v1: path.resolve(__dirname, '.api/v1'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'icon_qcon_pro_g2_webpack.js',
        path: path.resolve(__dirname, 'dist', 'icon', 'qcon_pro_g2'),
        // https://webpack.js.org/configuration/output/#outputlibrarytype
        library: {
            name: 'icon_qcon_pro_g2',
            type: 'this', // <-- Important. This seem to work fine for es5 output
        },
    },
}
