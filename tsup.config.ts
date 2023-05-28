import * as dotenv from "dotenv";
import { defineConfig } from "tsup";

import { replaceInFiles } from "./lib";
import * as pkg from "./package.json";

dotenv.config();
const copyCommand = process.env["COPY_COMMAND"];
const devices = process.env["DEVICES"];

// example with a banner and replace using esbuildOptions and options.define
// https://esbuild.github.io/api/#define
// https://github.com/tale/bruh/blob/main/tsup.config.ts
//
// example with a banner and setting process.env.NODE_ENV to production
// https://stackoverflow.com/questions/75938170/how-do-i-run-my-tsup-javascript-bundle-on-browser
//
// replace instead using esbuild-plugin-replace:
// https://github.com/web-infra-dev/garfish/blob/main/tsup.config.ts

export default defineConfig({
  name: "tsup",
  format: ["cjs"],
  entry: { icon_qcon_pro_g2_tsup: "src/index.ts" },
  tsconfig: "./tsconfig.json",
  clean: false,
  sourcemap: false,
  dts: false,
  splitting: false,
  target: "es5",
  outDir: "dist/icon/qcon_pro_g2/",
  external: ["midiremote_api_v1"],
  noExternal: [],
  async onSuccess() {
    console.info(`Starting tsup post-build phase (onSuccess) ...`);
    // await prependConfig(
    //   "src/config.ts",
    //   "dist/icon/qcon_pro_g2/icon_qcon_pro_g2_tsup.js",
    //   devices,
    //   copyCommand
    // );

    const replaceMap: Map<RegExp, string> = new Map([[/"use strict";?/g, ""]]);

    replaceInFiles("dist", /tsup.js/, replaceMap);
  },
  esbuildOptions(options) {
    options.define = {
      SCRIPT_VERSION: `"${process.env["npm_package_version"]}"`,
      "process.env.NODE_ENV": JSON.stringify("production"),
    };
    options.banner = {
      js: `
      // Package name: ${pkg.name}
      // Package version: ${pkg.version}
      // Package author: ${pkg.author}
      // Package desc: ${pkg.description}
      // Tip! Find the CONFIGURATION section and modify it for your needs`,
    };
  },
});
