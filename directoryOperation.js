fs = require('fs');
path = require('path')

fs.mkdir(path.join(__dirname, 'updatedFile'), {recursive: true}, (err)=>{
    if (err) {
        console.log('Error Creating this Folder', err)
        return;
    }
    console.log('Folder Created Suucessfuly!');
})
fs.mkdir(path.join(__dirname, 'deletedfolder'), {recursive: true}, (err)=>{
    if(err){
        console.log('Error', err)
    }
    console.log('deleted folder created successfuly')
})
fs.rm(path.join(__dirname, 'deletedfolder'), {recursive: true, force: true}, (err)=>{
    if(err){
        console.log('Error deleting folder', err)
    }
    console.log('FOlder deleted')
})


fs.readdir(path.join(__dirname, 'updatedFile'),(err, files)=>{
    if(err){
        console.log('error reading file', err)
        return;
    }
    console.log('file read', files)
})

fs.readdir(path.join(__dirname, 'updatedFile'),(err, files)=>{
    if(err) throw err;
    const txtFiles = files.filter(file => path.extname(file) === '.txt');
    console.log('TXT files read', txtFiles)
})

fs.readdir(path.join(__dirname, 'updatedFile'),(err, files)=>{
    if(err) {
        console.log('error reading file', err)
        return;
    }
    files.forEach(file => {
        const fullPath = path.join(__dirname, 'updatedFile', file)
         
        fs.stat(fullPath,(err, stats)=>{
        
            if (stats.isFile()) {
            console.log(file, 'is a FILE');
        } else if(stats.isDirectory()){
            console.log(file), 'is a Folder'
        }
        })
    })
});

function printTree(dir, indent = '') {
    fs.readdirSync(dir).forEach(file =>{
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        console.log(indent + file)
        if (stats.isDirectory){
            printTree(fullPath, indent + '')
        }
    })
}
