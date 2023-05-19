import { readFile } from 'node:fs/promises'

import * as dotenv from 'dotenv'
import { execaCommand } from 'execa'
import prependFile from 'prepend-file'
import { build } from 'tsup'

dotenv.config()
const copyCommand = process.env.COPY_COMMAND
const devices = process.env.DEVICES ?? '["main"]'

build({
    watch: process.argv.includes('--watch'),
    entry: { icon_qcon_pro_g2_tsup: 'src/index.ts' },
    outDir: 'dist/icon/qcon_pro_g2',
    clean: false,
    external: ['midiremote_api_v1'],
    noExternal: [],
    onSuccess: async () => {
        console.info(`Starting tsup post-build phase (onSuccess) ...`)

        const outputPath = 'dist/icon/qcon_pro_g2/icon_qcon_pro_g2_tsup.js'

        const configFileContents = (await readFile('src/config.ts')).toString('utf8')

        if (configFileContents) {
            // console.info(`Succesfully read config file ...`)

            const scriptConfigArray = /--BEGIN JS--([\s\S]+)/.exec(configFileContents)

            if (scriptConfigArray) {
                // console.info(`Succesfully parsed config file ...`)

                const scriptConfig = scriptConfigArray[1].replace(
                    'devices: ["main"]',
                    `devices: ${devices}`
                )

                if (scriptConfig) {
                    console.info(`Adding script config to '${outputPath}'`)
                    await prependFile(outputPath, scriptConfig + '\n\n')

                    if (copyCommand) {
                        await execaCommand(copyCommand, { shell: true, stdout: process.stdout })
                    }
                }
            } else {
                console.error(`ERROR: Failed copying config file to top of output!`)
            }
        }
    },
    define: {
        SCRIPT_VERSION: `"${process.env.npm_package_version}"`,
    },
    target: 'es5',
}).catch((err) => {
    console.error(err)
    process.exit(1)
})
