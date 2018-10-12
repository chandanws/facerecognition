const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = {
    users: [
        {
            id: '1',
            name: 'pablo',
            email: 'jhonwick@gmail.com',
            password: 'hola',
            entries: 0,
            joindate: new Date()
        },
        {
            id: '2',
            name: 'sally',
            email: 'sally@gmail.com',
            entries: 0,
            password: 'hola',
            joindate: new Date()
        }
    ], 
    login: [
        {
            id: '987',
            hash: '',
            email: 'sally@gmail.com'
        }
    ]
}

app.get('/', (req, res) => {
    res.send(db.users);
})

app.post('/signin', (req, res) => {
    if (req.body.email === db.users[1].email && req.body.password === db.users[1].password) {
        res.json(db.users[1]);
    } else {
        res.status(400).json('error logging in');
    }
})

app.post('/register', (req, res) => {
    const { email, name } = req.body;
    db.users.push({
            id: '123',
            name: name,
            email: email,
            entries: 0,
            joindate: new Date()
    });
    res.json(db.users[db.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    db.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        }
    })
    if (!found) {
        res.status(404).json('User don\'t exist');
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    db.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if (!found) {
        res.status(404).json('User don\'t exist');
    }
})

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3003, () => {
    console.log('App is running on port 3003');
})