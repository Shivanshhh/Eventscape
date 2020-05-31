const mongoose = require('mongoose');

mongoose.connect( , (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Mongo Connection Success');
    }
});

const eventSchema= new mongoose.Schema({
    eventname:{
        type: String,
        required: [true],
        trim: true,
},
fees:{
    type: Number,
    trim: true,

},
eventvenue:{
    type: String,
    required: [true],
    trim: true,
},
date:{
    type: Date,
    required: [true],
    trim: true,
},
time:{
    type: String,
    required: [true],
    trim: true,
},
link:{
    type: String,
    required: [true],
    trim: true,
},
image:{
    type: String,
    required:[true],
    trim: true,
},
description: {
    type: String,
    required: [true],
    trim: true
}
});
