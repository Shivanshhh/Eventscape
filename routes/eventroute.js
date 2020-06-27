const express = require('express');
const router = express.Router();
const Event = require('../models/eventschema');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://strtiwari28:qwerty1@cluster0-8ac9j.mongodb.net/events?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}
);

router.get("/", (req, res) => {
  res.render("add-event.ejs");
});

router.post('/', (req,res) =>{
  const newDoc= Event.create(req.body);
  console.log("db working")
});


module.exports=router;

