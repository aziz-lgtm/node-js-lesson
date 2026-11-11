app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('internal server error');
});

// express 4 async errors handler

app.get('/user', async (req, res, next) => {
    try {
        const user = await getUserFromDatabase();
        res.send(user);
    } catch (err) {
        next(err);
    }
});

// Some developers even create a helper function to avoid repeating try/catch everywhere:

function asyncHandler(fn) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

// Then use it like this:

app.get('/user', asyncHandler(async (req, res) => {
    const user = await getUserFromDatabase();
    res.send(user);
}));

// Express 5
// The current version of Express improves this behavior.

app.get('/user', async (req, res) => {
    const user = await getUserFromDatabase();
    res.send(user);
});

// How to Handle 404 Errors
app.user((req, res, next) => {
    res.status(404).send('sorry, that route doesnt exist');
});//Important: This should go after your routes, but before your error-handling middleware.

/*
Always place your error-handling middleware last.
Handle 404 errors separately.
Use next(err) to forward errors that aren't caught automatically, such as errors in async/await routes in Express 4 or asynchronous callbacks in any Express version.
*/