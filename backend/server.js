const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendStatus('this is working');
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
})