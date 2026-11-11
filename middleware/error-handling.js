const express = require('express')
const app = express()

// A simple route that throws an error
app.get('/', (req, res) => {
  throw new Error('something went wrong!')
})

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})