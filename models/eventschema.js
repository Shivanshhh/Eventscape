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
image: 
{ 
    data: Buffer, 
    contentType: String 
},
eventdescription: {
    type: String,
    required: [true],
    trim: true
}
});

const Event=mongoose.model('Event', eventSchema);
module.exports= Event;