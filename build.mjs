import { readFile } from 'node:fs/promises';

import * as dotenv from 'dotenv';
import { execaCommand } from 'execa';
import prependFile from 'prepend-file';
import { build } from 'tsup';

dotenv.config();
const copyCommand = process.env.COPY_COMMAND;
const devices = process.env.DEVICES ?? '["main"]';

build({
    watch: process.argv.includes('--watch'),
    entry: { icon_qcon_pro_g2: 'src/index.ts' },
    outDir: 'dist/icon/qcon_pro_g2',
    clean: true,
    external: ['midiremote_api_v1'],
    noExternal: [],
    onSuccess: async () => {
        const configFileContents = (await readFile('src/config.ts')).toString('utf8');

        const scriptConfig = /BEGIN JS\n([\s\S]+)/
            .exec(configFileContents)[1]
            .replace('devices: ["main"]', `devices: ${devices}`);

        await prependFile('dist/icon/qcon_pro_g2/icon_qcon_pro_g2.js', scriptConfig + '\n\n');

        if (copyCommand) {
            await execaCommand(copyCommand, { shell: true, stdout: process.stdout });
        }
    },
    define: {
        SCRIPT_VERSION: `"${process.env.npm_package_version}"`,
    },
    target: 'es5',
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
