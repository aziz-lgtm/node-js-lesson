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

// release()

console.log(os.release());

// version()
console.log(os.version());

// cpus()

console.log(os.cpus());

// uptime()
console.log(os.uptime);

// totalmem() & freemem()

console.log(os.totalmem());
console.log(os.freemem());

// userinfor()

console.log(os.userInfo());

// networkInterface()

console.log(os.networkInterfaces);
