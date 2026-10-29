const os = require("os");

// platform
console.log(os.platform());

if (os.platform() === 'win32') {
    // windows specific code
} else {
    // Non-windows specific code
}

// arch()
console.log(os.arch());

// type()
console.log(os.type());