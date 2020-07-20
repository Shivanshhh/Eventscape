const mongoose = require('mongoose');

const userschema= new mongoose.Schema({
    username:{
        type: String,
        required: [true],
        trim: true,
},
email:{
    type: String,
    trim: true,
},
password:{
    type: String,
    required: [true],
    trim: true,
},
confirmpassword:{
    type: String,
    required: [true],
    trim: true,
},
});

const User = mongoose.model('User', userschema);
module.exports= User;
