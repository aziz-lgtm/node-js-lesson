const {Buffer} = require("node:buffer");

const stringBuff = Buffer.from("faizal");
console.log(stringBuff);

const numbBuff = Buffer.from([70, 82, 69, 69, 67, 79, 68, 69, 67, 65, 77]);

console.log(numbBuff);

console.log(numbBuff[0]);

// toString()

console.log(stringBuff.toString());
console.log(numbBuff.toString())

// Buffer.alloc()

const someBuff = Buffer.alloc(10);
console.log(someBuff);

// Buffer.write();

someBuff.write("Hello Ayse");

console.log(someBuff);
console.log(someBuff.toString());

// Buffer.byteLength()

console.log(Buffer.byteLength("Hello freeCodeCamp"));

// other :
// Buffer.isBuffer(): checks if a given object is a buffer
// Buffer.compare(): compares two buffers and returns their sort order
// Buffer.concat(): joins multiple buffers together into one