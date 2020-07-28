const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.connect('mongodb+srv://strtiwari28:qwerty1@cluster0-8ac9j.mongodb.net/bahuthogaya?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Mongo Connection Success');
    }
});

