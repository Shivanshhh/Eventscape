const express = require('express');
const Event = require('../models/eventschema');
const router = express.Router();

router.get('/home', async (req,res) => {
  var event_date = [];
  var event_pics = [];
  var event_names = [];
  var event_links = [];

  var alldata= await Event.find({});
  alldata.forEach(function(doc) 
  {
      event_date.push(doc.eventdate);
  });
  console.log(event_date);

   function sortDates(dates) {
    return dates.map(function(date) {
      return new Date(date).getTime();
    }).sort(function(a, b) {
      return a - b;
    })};
 
  var orderedDates = sortDates(event_date);
  console.log(orderedDates);
  var nextDate = orderedDates.filter(function(date) {
    return (Date.now() - date) < 0;
  }); 

  console.log(nextDate); 

  var dates;
for(i=0;i<7;i++)
{
  dates = nextDate[i];
}
console.log(alldata)
var p =0;
 var i =0;
for (i=0;i<6;i++){
  q=0;
  alldata.forEach(function(doc) {
    console.log(doc)
   const d = new Date(doc.eventdate).getTime();
   console.log('doc'  +d)
   console.log('date' +nextDate[i])
      if(d==nextDate[i] && q!=1){
    event_pics.push(doc.image);
    event_names.push(doc.eventname);
    event_links.push(doc.eventlink)
    delete alldata[doc];
     p = p + 1;
     q = 1;
     console.log(i)
  }})};

console.log(p);
console.log(event_pics);
//console.log(event_pics[4])
;
res.render('index.ejs', {image: event_pics , image1: event_pics, name: event_names, link: event_links});

});

router.post('/home', async (req,res) => {
 const {event } = req.body;
 res.redirect(`/event/${event}`);
});



module.exports= router;