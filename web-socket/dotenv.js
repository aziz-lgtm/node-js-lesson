const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5000;
const apikey = process.env.API_KEY;

app.get('/', (req, res) => {
  res.send(`Connected succesfully using API key: ${apiKey}` )
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});