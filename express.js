const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

/*Express lets you handle different types of HTTP requests by using different routing methods. The most common ones are:

app.get() – retrieves data

app.post() – creates new data

app.put() – updates existing data

app.delete() – deletes data */

app.post('/submit', (req, res) => {
    res.send('Form submitted!');
});

app.put('/update', (req, res) => {
    res.send('Item updateeed!');
});

app.delete('/delete', (req, res) => {
    res.send('Item deleted!');
});