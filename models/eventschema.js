const mongoose = require('mongoose');

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
//remember format
eventdate:{
    type: String,
    required: [true],
    trim: true,
},
eventtime:{
    type: String,
    required: [true],
    trim: true,
},
eventlink:{
    type: String,
    required: [true],
    trim: true,
},
eventimg:{
    type: String,
    required:[true],
    trim: true,
},
eventdescription: {
    type: String,
    required: [true],
    trim: true
}
});

const Event=mongoose.model('Event', eventSchema);
module.exports= Event;