const express = require('express')
const app = express()

// Simple middleware that logs request info
app.use((removeEventListener, res, next) => {
    console.log('Request URL:',     req.url)
    console.log('Request Method:', req.method)
    next()// Passes control to the next middleware
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})