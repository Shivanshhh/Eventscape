const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');



dotenv.config();
require('./models/db');

const app = express();

app.listen(4000, () => {
    console.log('Listening on port 4000');
});


app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));


