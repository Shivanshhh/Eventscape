const express = require('express');
const Event = require('../models/eventschema');
const router = express.Router();
var event_date = [];
var event_pics = [];
var event_names = [];
router.get('/home', async (req,res) => {

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
console.log()
var p =0;
 var i =0;
  
  alldata.forEach(function(doc) {
   const d = new Date(doc.eventdate).getTime();
   if (i>5)
   {
     alldate = 0;
   }
      if(d===nextDate[i]){
    event_pics.push(doc.image);
    event_names.push(doc.eventname)
    i = i +1; 
     p = p + 1;
  }})

console.log(p);
console.log(event_pics);
//console.log(event_pics[4])
;
res.render('index.ejs', {image: event_pics , image1: event_pics, name: event_names});

});


module.exports= router;