const express = require('express');
const Event = require('../models/eventschema');
const router = express.Router();

router.get('/home', (req,res) =>
{
  var event_dates = [];
  event_dates = Event.find({}, {eventdate:1, _id:0});

  function sortDates(dates) {
    return dates.map(function(date) {
      return new Date(date).getTime();
    }).sort((a, b)=> {
      return a - b;
    });
  }

  event_dates = sortDates(event_dates);
  var nextDates = event_dates.filter(function(date) {
    return (Date.now() - date) < 0;
  }); 
  const images = [];
for(i=0;i<7;i++)
{
  images[i] = nextDates[i];
}
res.render("main.ejs", image1= images[0], image2 = images[1], image3 = images[2], image4 = images[3], image5 = image[4], image6 = image[5]);


});

module.exports= router;