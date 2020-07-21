const express = require('express');
const Event = require('../models/eventschema');
const router = express.Router();
var event_date = [];
router.get('/home', (req,res) =>
{
  Event.find().each(function(err, doc) {
    event_date.push(doc.eventdate);
  });

  function sortDates(dates) {
    return dates.map(function(date) {
      return new Date(date).getTime();
    }).sort(function(a, b) {
      return a - b;
    });
  }

  var orderedDates = sortDates(event_date);
  var nextDate = orderedDates.filter(function(date) {
    return (Date.now() - date) > 0;
  }); 
  var a= orderedDates.indexOf(nextDate)

for(i=0;i<7;i++)
{
  
}

res.render("index.ejs");

});
module.exports= router;