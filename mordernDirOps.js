

fsPromises = require('fs').promises
path = require('path')

async function Folder(dir){
        
    try{
        await fsPromises.mkdir(path.join(__dirname, 'FolderNew'), {recursive: true}, );
        console.log('Folder New Created successfuly!')

        const files = await fsPromises.readdir(dir);
        for(let file of files) {
            const fullPath = path.join(dir, file);
            const stats = await fsPromises.stat(fullPath)

            if (stats.isDirectory()) {
                console.log('', file);
            } else {
                console.log('', file)
            }
        }

    } catch(err){
        console.error(err)
    }
}
Folder(__dirname, 'FolderNew')