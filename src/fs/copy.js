import * as fs from 'node:fs/promises'

export const copy = async () => {
    try {
        await fs.mkdir('./files_copy')
        const files = await fs.readdir('./files')
        for(let file of files) {
            await fs.cp(`./files/${file}`,`./files_copy/${file}`)
        }
        console.log('copy files');
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

copy()