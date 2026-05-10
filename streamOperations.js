//Read Large file with stream
const fs = require('fs')

const readStream = fs.createReadStream('largeFile.txt', 'utf8');
readStream.on('data', (chunk) =>{
    console.log('new Chunck')
    console.log(chunk)
    })

    readStream.on('end', ()=>{
        console.log('Data finished reading')
    })


//Create a new file with stream
    const writeStream = fs.createWriteStream ('newFile.txt');

        writeStream.write('You are welcome back to this new file \n')
        writeStream.write('\n is an assignment to be submitted')
        writeStream.end()
   
//Pipe streams together
const readStream2 = fs.createReadStream('newFile.txt');
const writeStream2 = fs.createWriteStream('copiedNewFile.txt')

readStream2.pipe(writeStream2)

//Create Stream Transform
const {Transform} = require('stream');
const upperCaseTransform = new Transform ({
    transform(chunk, encoding, callback) {
        const upperChunk = chunk.toString().toUpperCase();
        callback(null, upperChunk)
    }
});
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);

//Custom readable stream
const {Readable} = require ('stream')
class NumberStream extends Readable {
    constructor(){
        super();
        this.current = 1;
    }
    _read(){
        if(this.current > 5) {
            this.push(null);
        } else{
            this.push(this.current.toString());
            this.current++;
        }
    }
}
const numberStream = new NumberStream();
numberStream.on('data', (chunk)=>{
    console.log(chunk.toString());
});