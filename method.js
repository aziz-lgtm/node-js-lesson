// One of the most commonly used response methods is res.send():

app.get("/text", (req, res) => {
  res.send("Hello, World!");
});


// Another commonly used response method is res.json().

app.get('/user', (req, res) => {
    res.json({
        name: 'John Doe', 
        age: 30
    });
});

// When you need to control the HTTP status code of a response, you can use res.status().
app.get('/notFound', (req, res) => {
    res.status(404).send('Not Found');
});

// If you want to send the user to a different URL, you can use res.redirect():

app.get('/oldpage', (req, res) => {
    res.redirect('/newpage');
});

// res.render()
app.get('/profile', (req, res) => {
    res.render('profile', {
        username: "john_doe"
    });
});
