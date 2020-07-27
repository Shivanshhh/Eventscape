const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Ev = require('../models/eventschema');

router.get("/:event", async (req, res) => {
    const { event } = req.params;
    var alldata = await Ev.Event1.findOne({ eventname: event });
    console.log(alldata)
    res.render('event', { record: alldata })
});

module.exports = router;