const express = require('express');
const Event = require('../models/eventschema');
const router = express.Router();
var event_date = [];
var event_pics = [];
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


alldata.forEach(function(doc) 
{
  for(i=0;i<7;i++){
   const d = new Date(doc.eventdate).getTime();
      if(d==nextDate[i]){
    event_pics.push(doc.image);}
}});

console.log(event_pics);
console.log(event_pics[4])
;
res.render('index.ejs', {image: event_pics[0]});

});


module.exports= router;