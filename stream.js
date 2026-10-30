const fs = require('fs');
const path = require('path');
const fs2 = require('fs/promises');


const inputFilePath = path.join(__dirname, 'input.txt');

const readInputFileStream = fs.createReadStream(inputFilePath);
console.log(readInputFileStream);

// 'data' event

readInputFileStream.on('data', (chun) => {
    console.log(`Recieved ${chun.length} bytes of data`);
})

// log the chunk of data to the console
readInputFileStream.on('data', (chun) => {
    console.log(`Received ${chun.length} bytes of data`);
    console.log(`Received data:`, chun);
})

// toString()

readInputFileStream.on('data', (chun) => {
    console.log(chun.toString())
})

// pipe()

// 1.make a text from here with promises

async function writeToFile() {
    try {
        await fs2.writeFile("tes.txt", "remember to let her into your heart, then you can start to make it better", "utf8");
        console.log('Succes create a new txt file')
    } catch (err) {
        console.error('You failed, mate!', err)
    }
}
writeToFile()


const outputFilePath = path.join(__dirname, "tes.txt")
const writeOutputFileStream = fs.createWriteStream(outputFilePath)

readInputFileStream.pipe(writeOutputFileStream);

// async function run() {
//     try {
//         // 1. Wait for this to completely finish first
//         await fs2.writeFile("tes.txt", "remember to let her into your heart, then you can start to make it better", "utf8");
//         console.log('Success creating a new txt file');

//         // 2. Only after it's done, do the stream pipe
//         const inputFilePath = path.join(__dirname, 'input.txt');
//         const outputFilePath = path.join(__dirname, "tes.txt");

//         const readInputFileStream = fs.createReadStream(inputFilePath);
//         const writeOutputFileStream = fs.createWriteStream(outputFilePath);

//         readInputFileStream.pipe(writeOutputFileStream);
//         console.log('Stream piped successfully!');
        
//     } catch (err) {
//         console.error('You failed, mate!', err);
//     }
// }

// run();