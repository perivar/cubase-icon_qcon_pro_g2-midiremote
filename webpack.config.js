// https://medium.com/netscape/firebase-cloud-functions-with-typescript-and-webpack-7781c882a05b
// https://blog.logrocket.com/using-webpack-typescript/

"use strict";

const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const pkg = require("./package.json");

module.exports = {
  entry: "./src/index.ts",
  target: ["web", "es5"], // <-- Include this for es5 output
  externals: "midiremote_api_v1",
  module: {
    rules: [
      // this only removes comments from ts-files and not the polyfills
      // {
      //     test: /\.tsx?$/,
      //     loader: 'remove-comments-loader',
      // },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig-es5.json",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false, // make sure to keep the format for readabilty
    moduleIds: "named", // use the filename as module-ids
    // this removes all comments but require minimize to be set to true
    // minimizer: [
    //   new TerserPlugin({
    //     terserOptions: {
    //       format: {
    //         comments: false,
    //       },
    //     },
    //     extractComments: false,
    //   }),
    // ],
  },
  resolve: {
    alias: {
      midiremote_api_v1: path.resolve(__dirname, ".api/v1"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "icon_qcon_pro_g2_webpack.js",
    path: path.resolve(__dirname, "dist", "icon", "qcon_pro_g2"),
    // https://webpack.js.org/configuration/output/#outputlibrarytype
    library: {
      name: "icon_qcon_pro_g2",
      type: "this", // <-- Important. This seem to work fine for es5 output
    },
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
              Package name: ${pkg.name}
              Package version: ${pkg.version}
              Package author: ${pkg.author}
              Package desc: ${pkg.description}
              Tip! Find the CONFIGURATION section and modify it for your needs
            `,
    }),
  ],
};
