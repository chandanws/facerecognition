const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/Register');
const profile = require('./controllers/Profile');
const image = require('./controllers/Image');
const signin = require('./controllers/Signin');

const db = knex({
        client: 'pg',
        connection: {
          host : '127.0.0.1',
          user : 'postgres',
          password : '',
          database : 'facerecognition'
        }
    });


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send(database.users));
app.post('/signin', (req, res) => signin.handleSignin(req, res, db, bcrypt));
app.post('/register', (req, res) => register.handleRegister(req, res, db, bcrypt));
app.get('/profile/:id', (req, res) => profile.handleProfile(req, res, db));
app.post('/imageurl', (req, res) => image.handleApiCall(req, res));
app.put('/image', (req, res) => image.handleImage(req, res, db));

app.listen(3003, () => {
    console.log('App is running on port 3003');
}) 