import * as dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import prependFile from 'prepend-file'

const getFilesRecursive = (sourcePath: string, filter: RegExp, fileList?: string[]) => {
    const filelist: string[] = fileList || []

    const assetsPath = path.resolve(sourcePath)
    const assetsPathExists = fs.existsSync(assetsPath)

    if (assetsPathExists) {
        console.info(`Folder exists (${assetsPath.toString()})...`)

        const files = fs.readdirSync(assetsPath)

        files.forEach((file) => {
            const filePath = path.join(sourcePath, file)
            const fileStat = fs.lstatSync(filePath)

            if (fileStat.isDirectory()) {
                getFilesRecursive(filePath, filter, filelist)
            } else if (filter.test(filePath)) {
                filelist.push(filePath)
            }
        })
    }

    return filelist
}

const replaceInFiles = (assetsPath: string, filter: RegExp, replaceMap: Map<RegExp, string>) => {
    const filePaths = getFilesRecursive(assetsPath, filter)

    if (filePaths) {
        filePaths.forEach((filePath) => {
            replaceInFile(filePath, replaceMap)
        })
    }
}

const replaceInFile = (filePath: string, replaceMap: Map<RegExp, string>) => {
    console.info(`Processing '${filePath}'`)

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.error(err)
        }

        let replaced = data
        replaceMap.forEach((replaceValue: string, searchValue: RegExp) => {
            // console.info(`Replacing '${searchValue}' with '${replaceValue}'`)
            replaced = replaced.replace(searchValue, replaceValue)
        })

        fs.writeFile(filePath, replaced, 'utf8', function (err) {
            if (err) {
                return console.error(err)
            }
        })
    })
}

export const prependConfig = async (configPath: string, outputPath: string) => {
    const configFileContents = fs.readFileSync(configPath).toString('utf8')
    if (configFileContents) {
        const scriptConfigMatches = /--BEGIN JS--([\s\S]+)/.exec(configFileContents)

        if (scriptConfigMatches) {
            // read from .env file
            dotenv.config()
            const devices = process.env['DEVICES'] ?? '["main"]'
            // const copyCommand = process.env['COPY_COMMAND']

            const scriptConfig = scriptConfigMatches[1].replace(
                'devices: ["main"]',
                `devices: ${devices}`
            )

            if (scriptConfig) {
                console.info(`Adding script config to '${outputPath}'`)
                await prependFile(outputPath, scriptConfig + '\n\n')

                // if (copyCommand) {
                //     await execaCommand(copyCommand, { shell: true, stdout: process.stdout })
                // }
            } else {
                console.error(`ERROR: Failed copying config file to top of output!`)
            }
        }
    }
}

// these regexes work
// replaced = replaced.replace(/"use strict";/g, '//')
// replaced = replaced.replace(/Object.defineProperty\(exports, "__esModule", { value: true }\);/g, '//')

const replaceMap: Map<RegExp, string> = new Map([
    [/SCRIPT_VERSION/g, `"${process.env['npm_package_version']}"`], // replace SCRIPT_VERSION with the version from package.json
    [/"use strict";?/g, ''],
    [/'use strict';?/g, ''],
    [/Object.defineProperty\(exports, "__esModule", { value: true }\);?/g, ''],
    [/Object.defineProperty\(exports, "__esModule", \({ value: true }\)\);?/g, ''],
    [/Object.defineProperty\(exports, '__esModule', { value: true }\);?/g, ''],
    [/(var midiremote_api.*?)\s=\s__.*$/gm, "$1 = require('midiremote_api_v1')"],
    [/\/\*{2,}\//g, ''], // remove comments like /****/
])

replaceInFiles('dist', /.js/, replaceMap)

// prependConfig('src/config.ts', 'dist/icon/qcon_pro_g2/icon_qcon_pro_g2_webpack.js')
