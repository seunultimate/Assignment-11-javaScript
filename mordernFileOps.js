const fsPromises = require('fs').promises
const path = require('path');

const fileCreationHub = async () => {
    try{
        await fsPromises.writeFile(path.join(__dirname, 'FileTest', 'fileThree.html'), '//Hello world, welcome to Hmtl')
        console.log('File Created')
        const data = await fsPromises.readFile(path.join(__dirname, 'fileTest', 'filethree.html'), 'utf8')
        console.log(data);

        await fsPromises.access(path.join(__dirname, 'FileTest', 'asyncAwait.js'),);
        await fsPromises.copyFile(path.join(__dirname, 'FileTest', 'delete.txt'),path.join(__dirname, 'FileTest', 'copyFile.txt'),);
        await fsPromises.rename(path.join(__dirname, 'FileTest', 'fileOne.txt'), path.join(__dirname, 'FileTest', 'fileOne2.txt'),);
        
        const stats = await fsPromises.stat(path.join(__dirname, 'FileTest', 'asyncAwait.js'),);
        console.log(stats.size);
    
    
    } catch(err) {
        console.error(err)
    }
}
fileCreationHub()