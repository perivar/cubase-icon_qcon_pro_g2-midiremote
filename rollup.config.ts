// rollup.config.js

// https://blog.openreplay.com/the-ultimate-guide-to-getting-started-with-the-rollupjs-javascript-bundler/
// https://www.sitepoint.com/rollup-javascript-bundler-introduction/
// https://github.com/suiet/wallet-adapter/blob/main/rollup.config.ts

// npx rollup --config --environment NODE_ENV:development --bundleConfigAsCjs

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// import {getBabelOutputPlugin} from '@rollup/plugin-babel';
import * as pkg from "./package.json";

const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} mode bundle`);

const config = defineConfig({
  input: "src/index.ts",
  // input: "dist/src/index.js",

  output: [
    {
      file: "dist/icon/qcon_pro_g2/icon_qcon_pro_g2_rollup.js",
      format: "es",
      exports: "named",
      // plugins: [
      // compile js to es5 compatible
      // getBabelOutputPlugin({
      //   filename: "dist/icon/qcon_pro_g2/icon_qcon_pro_g2_rollup.js",
      //   configFile: path.resolve(__dirname, "babel.config.js"),
      // }),
      // getBabelOutputPlugin({
      //   filename: "dist/icon/qcon_pro_g2/icon_qcon_pro_g2_rollup.js",
      //   presets: [
      //     [
      //       "@babel/preset-env",
      //       //       {
      //       //         modules: false,
      //       //         spec: true,
      //       //         useBuiltIns: "usage",
      //       //         forceAllTransforms: true,
      //       //         corejs: {
      //       //           version: 3,
      //       //           proposals: false,
      //       //         },
      //       //         debug: true,
      //       //       },
      //     ],
      //   ],
      //   plugins: ["@babel/plugin-transform-runtime"],
      //   ignore: ["node_modules/**"],
      // }),
      // ],
      banner: `
// Package name: ${pkg.name}
// Package version: ${pkg.version}
// Package author: ${pkg.author}
// Package desc: ${pkg.description}
// Tip! Find the CONFIGURATION section and modify it for your needs`,
    },
  ],

  external: ["midiremote_api_v1"],

  plugins: [
    peerDepsExternal(),

    resolve(),

    commonjs({
      sourceMap: false,
    }),

    // compile ts files
    typescript({
      lib: ["es5", "dom"],
      target: "es5",
      module: "ESNext",
    }),

    // convert es6 to es5. Note! use index.js as input
    // buble(),

    // replace some values
    replace({
      preventAssignment: true,
      values: {
        SCRIPT_VERSION: `"${process.env["npm_package_version"]}"`,
      },
    }),
  ],
});

export default config;
