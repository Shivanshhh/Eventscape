const express = require('express');
const router = express.Router();
const mongoose=require("mongoose");
const Event = require('../models/eventschema');

router.get("/", async(req,res)=>{
    var alldata= await Event.find({});
    console.log(alldata[alldata.length -1])
    res.render('event', {record: alldata[alldata.length -1]}) 
});

module.exports= router;