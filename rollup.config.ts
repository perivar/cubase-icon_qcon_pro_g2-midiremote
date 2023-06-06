// rollup.config.js

// https://blog.openreplay.com/the-ultimate-guide-to-getting-started-with-the-rollupjs-javascript-bundler/
// https://www.sitepoint.com/rollup-javascript-bundler-introduction/
// https://github.com/suiet/wallet-adapter/blob/main/rollup.config.ts
// https://github.com/andrewvasilchuk/vue-lazy-youtube-video/tree/dev/build
// https://github.com/ashleyw/react-sane-contenteditable/blob/master/rollup.config.js

// npx rollup --config --environment NODE_ENV:development --bundleConfigAsCjs

// import {getBabelOutputPlugin} from '@rollup/plugin-babel';
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";

import * as pkg from "./package.json";

const extensions = [".ts", ".tsx", ".js"];

const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} mode bundle`);

const config = defineConfig({
  input: "src/index.ts",

  output: [
    {
      file: "dist/icon/qcon_pro_g2/icon_qcon_pro_g2_rollup.js",
      format: "es",
      exports: "named",
      sourcemap: false,
      // plugins: [
      // compile js to es5 compatible
      // getBabelOutputPlugin({
      //   filename: "dist/icon/qcon_pro_g2/icon_qcon_pro_g2_rollup.js",
      //   presets: [
      //     [
      //       "@babel/preset-env",
      //       //       unncomment these if you want corejs polyfill
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
    json(),

    resolve({
      extensions: extensions,
      preferBuiltins: true,
    }),

    commonjs({
      sourceMap: false,
      include: "**/node_modules/**",
    }),

    // compile ts files
    typescript({
      tsconfig: "tsconfig-es5.json",
      tsconfigOverride: {
        compilerOptions: { module: "ES2015" },
      },
    }),

    babel({
      babelrc: false,
      extensions: extensions,
      exclude: "**/node_modules/**",
      // compile js to es5 compatible
      presets: [
        [
          "@babel/preset-env",
          // unncomment these if you want corejs polyfill
          // {
          //   modules: false,
          //   spec: true,
          //   useBuiltIns: "usage",
          //   forceAllTransforms: true,
          //   corejs: {
          //     version: 3,
          //     proposals: false,
          //   },
          //   debug: true,
          // },
        ],
      ],
      babelHelpers: "runtime", // don't use bundled
      plugins: ["@babel/plugin-transform-runtime"],
    }),

    // replace some values
    replace({
      delimiters: ["", ""],
      preventAssignment: true,
      values: {
        SCRIPT_VERSION: `"${process.env["npm_package_version"]}"`,
        "import midiremote_api, { mDefaults } from 'midiremote_api_v1';":
          "var midiremote_api = require('midiremote_api_v1'); var mDefaults = midiremote_api.mDefaults;",
      },
    }),
  ],
});

export default config;
