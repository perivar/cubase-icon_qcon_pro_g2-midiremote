import { ExecaChildProcess, Options } from "execa";
import fs from "fs";
import path from "path";
import prependFile from "prepend-file";

export const getFilesRecursive = (sourcePath: string, filter: RegExp, fileList?: string[]) => {
  const filelist: string[] = fileList || [];

  const assetsPath = path.resolve(sourcePath);
  const assetsPathExists = fs.existsSync(assetsPath);

  if (assetsPathExists) {
    console.info(`Folder exists (${assetsPath.toString()})...`);

    const files = fs.readdirSync(assetsPath);

    files.forEach((file) => {
      const filePath = path.join(sourcePath, file);
      const fileStat = fs.lstatSync(filePath);

      if (fileStat.isDirectory()) {
        getFilesRecursive(filePath, filter, filelist);
      } else if (filter.test(filePath)) {
        filelist.push(filePath);
      }
    });
  }

  return filelist;
};

export const replaceInFiles = (
  assetsPath: string,
  filter: RegExp,
  replaceMap: Map<RegExp, string>
) => {
  const filePaths = getFilesRecursive(assetsPath, filter);

  if (filePaths) {
    filePaths.forEach((filePath) => {
      replaceInFile(filePath, replaceMap);
    });
  }
};

export const replaceInFile = (filePath: string, replaceMap: Map<RegExp, string>) => {
  console.info(`Processing '${filePath}'`);

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.error(err);
    }

    let replaced = data;
    replaceMap.forEach((replaceValue: string, searchValue: RegExp) => {
      // console.info(`Replacing '${searchValue}' with '${replaceValue}'`)
      replaced = replaced.replace(searchValue, replaceValue);
    });

    fs.writeFile(filePath, replaced, "utf8", function (err) {
      if (err) {
        return console.error(err);
      }
    });
  });
};

// https://fossies.org/linux/storybook/scripts/utils/exec.ts
// Note this is to fool `ts-node` into not turning the `import()` into a `require()`.
// See: https://github.com/TypeStrong/ts-node/discussions/1290
// eslint-disable-next-line @typescript-eslint/no-implied-eval
const dynamicImport = new Function("specifier", "return import(specifier)");
export const getExeca = async () => (await dynamicImport("execa")) as typeof import("execa");

// Reimplementation of `execaCommand` to use `getExeca`
export const execaCommand = async (
  command: string,
  options: Options = {}
): Promise<ExecaChildProcess<string>> => {
  const execa = await getExeca();
  // We await here because execaCommand returns a promise, but that's not what the user expects
  // eslint-disable-next-line @typescript-eslint/return-await
  return await execa.execaCommand(command, options);
};

/**
 * prepend the config area starting with BEGIN JS to a file
 * @param configPath
 * @param outputPath
 * @param devices
 * @param copyCommand e.g. "cp dist/icon/qcon_pro_g2/icon_qcon_pro_g2_webpack.js dist/icon/qcon_pro_g2/icon_qcon_pro_g2_webpack-copy.js"
 */
export const prependConfig = async (
  configPath: string,
  outputPath: string,
  devices?: string,
  copyCommand?: string
) => {
  const configFileContents = fs.readFileSync(configPath).toString("utf8");
  if (configFileContents) {
    const scriptConfigMatches = /BEGIN JS([\s\S]+)/.exec(configFileContents);

    if (scriptConfigMatches) {
      console.debug(`Succesfully parsed config file ...`);

      let scriptConfig = scriptConfigMatches[1];
      if (devices) {
        scriptConfig = scriptConfig.replace('devices: ["main"]', `devices: ${devices}`);
      }

      if (scriptConfig) {
        console.info(`Adding script config to '${outputPath}'`);
        await prependFile(outputPath, scriptConfig + "\n\n");

        if (copyCommand) {
          console.info(`Copying script config using '${copyCommand}'`);
          await execaCommand(copyCommand, { shell: true, stdout: process.stdout });
        }
      } else {
        console.error(`ERROR: Failed copying config file to top of output!`);
      }
    }
  }
};
