import * as fs from 'node:fs/promises'

export const list = async () => {
    try {
        const files = await fs.readdir('./files')
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed')
    }
};
list()