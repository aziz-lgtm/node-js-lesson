const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./userRoutes');

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});