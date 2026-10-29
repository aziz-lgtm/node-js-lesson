const fs = require("fs/promises");

async function deleteFile() {
    try {
        await fs.unlink("article.md");
        console.log("File deleted succesfully!");
    } catch (err) {
        console.error("Error deleting file:", err);
    }
}

deleteFile();