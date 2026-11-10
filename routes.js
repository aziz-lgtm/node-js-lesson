// static route
app.get('/home', (req, res) => {
    res.send('Welcome to the homepage!');
});

// another instance
app.get('/menu/drinks', (req, res) => {
    res.send('Welcome to the drinks menu!');
});

/* a restaurant app uasually does this
    /menu/food
    /menu/drinks
    /menu/desserts
*/

// route with a parameter in the path
app.get('/post/:postId', (req, res) => {
    const postId = req.params.postId;
    res.send(`Viewing post with ID: ${postID}`)
});
