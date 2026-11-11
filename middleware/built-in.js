// // Here are some examples of built-in middleware:

// app.use(express.json())

// app.use(express.static('public'))

// app.use(express.urlencoded({extended: true}))

// // Now, here are some examples of third-party middleware:

// // npm install cors
// const cors = require('cors')
// app.use(cors())

// // npm install morgan
// const morgan = require('morgan')
// app.use(morgan('tiny'))


// example
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('hello,world!')
})

app.listen(3000, () => {
  console.log('server running on http://localhost:3000')
})