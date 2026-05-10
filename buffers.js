//Create Buffer with string
const bufferString = Buffer.from('Hello Oluwaseun');
console.log(bufferString)
console.log(bufferString.toString());

//Create Buffer with size
const bufferSize = Buffer.alloc(100);
console.log(bufferSize)

//..Write in to Buffer
bufferSize.write('MACE');
console.log(bufferSize.toString())

//Slice Buffer
const bufferSlice =Buffer.from('Ultimate Tech');
const sliced = bufferSlice.slice(1,6)
console.log(sliced.toString());

//Concatenate Buffers
const firstBuffers =Buffer.from('Learning Backend');
const seconfBuffers = Buffer.from(' in M4ACE');
const Concatenate = Buffer.concat([firstBuffers, seconfBuffers])

console.log(Concatenate.toString());

//Convert Buffers to Json
const bufferJson = Buffer.alloc(50);
console.log(bufferJson.toJSON())

const BufferNew = Buffer.from('Ultimate Tech Lab')
const json = BufferNew.toJSON();
console.log(json)