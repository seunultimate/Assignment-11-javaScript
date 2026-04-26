fs = require('fs');
path = require('path');

//reading a file
fs.readFile(path.join(__dirname, 'fileTest', 'fileOne.txt'), 'utf8', (err, data) => {
     if(err) {err
        console.log(data)}
})

//writing a new a new file and logging the error if error caught
fs.writeFile(path.join(__dirname, 'fileTest', 'fileTwo.txt'), 'This is the second file Two written for this module', (err)=>{
    if (err) {
        console.log('Error written file', err);
        return;
    }
    console.log('file written successfully')

    //rename the file
    fs.rename(path.join(__dirname, 'fileTest', 'fileTwo.txt'), path.join(__dirname, 'fileTest', 'fileTwo2.txt'), (err)=>{
    if (err) {
        console.log('Error renaming file', err);
        return;
    }
    console.log('rename completed')

    
})
})
//writing a new file to be deleted
    fs.writeFile(path.join(__dirname, 'fileTest', 'delete.txt'), 'This is to be deleted ASAP',(err)=>{
        if(err){
            console.log('File cannot be written', err)
        } return;
        console.log('File written Successfylly');


//deleting the new file
        fs.unlink(path.join(__dirname, 'fileTest', 'delete.txt'), (err)=>{
        if(err){
            console.log('File cannot be deleted', err)
        } return;
        console.log('delete is completed!');
})
})

//creating a js file
fs.writeFile(path.join(__dirname, 'fileTest', 'asyncAwait.js'), '//Welcome to AsyncAwait javaScript version', (err)=>{
    if(err) {
        console.log('Cant Write the file', err)
    } return;
    console.log('File created')
})

//check file existence
fs.access(path.join(__dirname, 'fileTest', 'fileTwo.txt'), (err)=>{
    if(err) {
        console.log('Error checking file', err)
    } else {
        console.log('file exist')
    }
})


//copy a file
fs.copyFile(
    path.join(__dirname, 'fileTest', 'fileTwo.txt'),
    path.join(__dirname, 'fileTest', 'copyFile.txt'), (err)=>{
    if(err) {
        console.log('Cant copy file:', err);
        return;
    }
    console.log('file copied successfuly')
})

//file status
fs.stat(path.join(__dirname, 'fileTest', 'fileOne.txt'), (err, stats)=>{
    if(err) {
        console.log('Error getting file stats', err)
    } return;
    console.log('File size', stats.size);
    console.log('Is file', stats.isfile());
    console.log('Is directory?', stats.isDirectory());
});



//catching the error
process.on('UncaughtException', err =>{
    console.error(`there was an uncaught error: ${err}`)
    process.exit(1);
})
    