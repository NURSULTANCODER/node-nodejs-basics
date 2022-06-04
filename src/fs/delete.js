import * as fs from 'node:fs/promises'

export const remove = async () => {
    try {
        await fs.rm('./files/fileToRemove.txt')
        console.log('delete file');
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

remove()