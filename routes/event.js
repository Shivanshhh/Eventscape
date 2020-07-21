const express = require('express');
const router = express.Router();
const mongoose=require("mongoose");
const Event = require('../models/eventschema');

router.get("/:event", async(req,res)=>{
    const { event } = req.params;
    var alldata= await Event.findOne({eventname: event});
    console.log(alldata)
    res.render('event', {record: alldata})
});

module.exports= router;