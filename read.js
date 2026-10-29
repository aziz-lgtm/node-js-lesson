const fs = require("fs/promises");

async function readFileContent() {
    try {
        const fileContent = await fs.readFile("article.md", "utf8");
        console.log('File content:', fileContent);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

readFileContent()