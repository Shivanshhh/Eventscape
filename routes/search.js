const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Ev = require('../models/eventschema');

router.get("/:event", async (req, res) => {
    const { event } = req.params;
    html = '';
    var alldata = await Ev.Event1.find({eventname:{$regex: event ,$options:'i'}});
  alldata.forEach(function (doc) {
    html += `<div class="col-md-6 col-sm-12 col-lg-4">
    <div class="card card__main">
      <div class="card__side card__side--front">
        <div>
          <img src="data:image/${doc.image.contentType};base64, 
          ${doc.image.data.toString('base64')}" class="card__picture">
        </div>

      </div>
      <div class="card__side card__side--back">
        <div class="card-details">
          <h4>Event Type: &nbsp;<span class="event-type">${doc.eventtype}</span></h4>
          <a href="/event/${doc.eventname}" class="btn card-btn btn-more"><span>Know more</span></a>
          <a href="${doc.eventlink}" class="btn card-btn btn-register"><span>Register</span></a>
        </div>
      </div>
    </div>
  </div>`;});
  res.render('search-event.ejs', {html : html});
  });
 
module.exports = router;