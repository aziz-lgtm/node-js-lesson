// app.route()

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON request bodies

// Use app.route() to group handlers for the same path

app
.route('/user')
.get((req, res) => {
    res.send('Fetching user data');
})
.post((req, res) => {
    const { name } = req.body;
    res.send(`Creating a user with name: ${name}`);
})
.put((req, res) => {
    const {name} = req.body;
    res.send(`Updating the user to: ${name}`);
})
.delete((req, res) => {
    res.send('Deleting the user');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
