console.log(process.env);

console.log(process.env.NODE_ENV);

console.log(process.env.SHELL)

console.log(process.env.PATH)

console.log(process.env.PWD)

console.log(process.env.USER)

// process.argv

console.log(process.argv);

// cwd()

console.log(process.cwd()); 

// 'exit' event
process.on('exit', (cod) => {
    console.log(`Process exiting with code: ${cod}`)
});

// "uncaughtException" event
process.on('uncaughtException', (err) => {
    console.error('Uncaught error:', err.message);
});

// 'warning' event

process.on('warning', (warns) => {
    console.warn("warning name:". warning.name);
    console.warn("warning message:", warning.message);
});

// emitWarning() 
process.emitWarning('this is a custokm warning message', 'CustomWarning')

