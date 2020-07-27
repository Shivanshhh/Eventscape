const express = require('express');
const bodyParser = require('body-parser');
const session= require('express-session');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const mainRouter = require('./routes/index');
const eventrouter = require('./routes/addevent')
const currenteventrouter= require('./routes/event')
const searchrouter= require('./routes/search')
const regroute = require('./routes/reg-login')
const app = express();
const mongoose = require('mongoose');

dotenv.config();

require('./models/db');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3000000,
    sameSite: true,
  },
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/routes/uploads'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${process.env.PORT || '3000'}`);
});

app.use('/', mainRouter);
app.use('/addevent', eventrouter);
app.use('/search', searchrouter);
app.use('/event', currenteventrouter);
app.use('/register', regroute);