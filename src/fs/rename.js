import * as fs from 'node:fs/promises'

export const rename = async () => {
    try {
        await fs.rename('./files/wrongFilename.txt', './files/properFilename.md')
        console.log('file rename')
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

rename()