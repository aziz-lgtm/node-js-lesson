const express = require('express')
const app = express()
const router = express.Router()

// Router-level middleware to log requests to '/menu' routes

router.use((req, res, next)=> {
    console.log('Request made to /menu route')
    next() // Pass control to the next handler
})

// Define routes
router.get('/drinks', (req, res) => {
    res.send('Welcome to the drinks menu!')
})

app.use('/menu', router) //apply the router

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})