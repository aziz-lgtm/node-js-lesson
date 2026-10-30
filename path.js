const path = require('path');

// basename()
console.log(path.basename(__filename));

// dirname()
console.log(path.dirname(__dirname));

// extname
console.log(path.extname(__filename));

// join()
const joinedPath = path.join("src", "assets", "text-files");
console.log(joinedPath);

// resolve()
const absolutePath = path.resolve("assets", "src", "text-file");
console.log(absolutePath);

// parse() & format()
const parsedFile = path.parse(__filename);

console.log(parsedFile);

// format()
const formattedDirectory = path.format({
  dir: "/users/johndoe/docs",
  name: "file",
  ext: ".txt",
});

console.log(formattedDirectory);