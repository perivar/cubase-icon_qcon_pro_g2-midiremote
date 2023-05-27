import * as dotenv from "dotenv";
import { defineConfig } from "tsup";

import { replaceInFiles } from "./lib";

dotenv.config();
const copyCommand = process.env["COPY_COMMAND"];
const devices = process.env["DEVICES"];

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
  define: {
    SCRIPT_VERSION: `"${process.env["npm_package_version"]}"`,
  },
});
