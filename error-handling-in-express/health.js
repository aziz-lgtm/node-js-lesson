app.get('/health', (req, res) => {
    res.status(200).send('OK')
})

// SIGTERM & SIGINT
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('server closed. cleaning up')
    })
})

// How Do You Mark the App as Unhealthy Before Shutdown?

let isShuttingDown = false

app.get('/health', (req, res) => {
    if (isShuttingDown) {
        res.status(503).send('shutting down')
    } else {
        res.status(200).send('Ok')
    }
})

process.on('SIGTERM', () => {
    isShuttingDown = true
    
    server.close(() => {
        console.log('gracefull shutdown complete')
        // perform cleanup
    })
})