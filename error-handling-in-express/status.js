res.status(400).send('bad request');

res.status(200).json({
    message: "success"
});

res.status(500).send('internal server error');

res.status(500).send('internal server error');

