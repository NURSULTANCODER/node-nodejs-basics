import * as fs from 'node:fs/promises'

export const read = async () => {
    try {
        await fs.readFile('./files/fileToRead.txt')
        console.log(data.toString())
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

read()