import * as dotenv from "dotenv";

import { replaceInFiles } from "./lib";

dotenv.config();
const copyCommand = process.env["COPY_COMMAND"];
const devices = process.env["DEVICES"];

const replaceMap: Map<RegExp, string> = new Map([
  [/SCRIPT_VERSION/g, `"${process.env["npm_package_version"]}"`], // replace SCRIPT_VERSION with the version from package.json
  [/"use strict";?/g, ""],
  [/'use strict';?/g, ""],
  [/if \(false\) \{\}/g, ""],
  [/Object.defineProperty\(exports, "__esModule", { value: true }\);?/g, ""],
  [/Object.defineProperty\(exports, "__esModule", \({ value: true }\)\);?/g, ""],
  [/Object.defineProperty\(exports, '__esModule', { value: true }\);?/g, ""],
  [/(var midiremote_api.*?)\s=\s__.*$/gm, "$1 = require('midiremote_api_v1')"],
  [/\/\*{2,}\//g, ""], // remove comments like /****/
  [/\/\/ eslint-disable-next-line.*$/gm, ""], // remove es-lint ignore lines
  [/\/\* eslint.*?\*\//gm, ""], // remove es-lint ignore lines
]);

replaceInFiles("dist", /webpack.js/, replaceMap);

// prependConfig(
//   "src/config.ts",
//   "dist/icon/qcon_pro_g2/icon_qcon_pro_g2_webpack.js",
//   devices,
//   copyCommand
// );
