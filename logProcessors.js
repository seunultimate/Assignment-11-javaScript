const fs = require('fs');
const readline = require('readline');
const EventEmitter = require('events');

class LogProcessor extends EventEmitter {

    constructor(file) {
        super();

        this.file = file;

        this.errorCount = 0;
    }

    async processLogs() {

        const readStream = fs.createReadStream(this.file);

        const writeStream = fs.createWriteStream('filtered.log');

        const rl = readline.createInterface({
            input: readStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {

            this.emit('lineRead', line);

            if (line.includes('ERROR')) {

                this.errorCount++;

                writeStream.write(line + '\n');

                this.emit('errorFound', line);
            }
        }

        writeStream.end();

        this.emit('processingComplete', this.errorCount);
    }
}

const processor = new LogProcessor('app.log');


processor.on('lineRead', (line) => {
    console.log('Reading:', line);
});

processor.on('errorFound', (line) => {
    console.log('Error detected:', line);
});

processor.on('processingComplete', (count) => {
    console.log(`Finished processing`);
    console.log(`Total errors: ${count}`);
});


processor.processLogs();