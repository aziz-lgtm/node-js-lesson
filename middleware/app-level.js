const express = require('express')
const app = express()

// Application-level middleware that logs all incoming requests
app.use((req, res, next) => {
    console.log('Request received at:', new Date())
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server running on http://localhost: 3000')
})