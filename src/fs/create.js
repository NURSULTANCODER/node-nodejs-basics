import * as fs from 'node:fs/promises'

export const create = async () => {
    try {
        await fs.open('./files/fresh.txt', 'w')
        await fs.writeFile('./files/fresh.txt', 'I am fresh and young inside of the files folder')
        console.log('create file and add text');
    } catch (error) {
        throw new Error('FS operation failed')
    }

};

create()