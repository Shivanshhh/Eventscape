const express = require('express');
const router = express.Router();
const session= require('express-session');
const Event = require('../models/eventschema');
var fs = require('fs'); 
var path = require('path'); 
var multer = require('multer'); 

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/register');
  } else {
    next();
  }
}; 
  
var storage = multer.diskStorage({ 
  destination: (req, file, cb) => { 
      cb(null, './routes/uploads') 
  }, 
  filename: (req, file, cb) => { 
    cb(null, file.fieldname + '-' + Date.now())  
  } 
}); 
  
var upload = multer({ storage: storage }); 

router.get('/', redirectLogin, (req, res) => {
  res.render('add-event');
});

router.post('/', upload.single('image'), async (req,res) =>{
  var eventname= req.body.eventname;
  const event= new Event({
      eventname: req.body.eventname,
      fees: req.body.fees,
      eventtype: req.body.eventtype,
      eventvenue: req.body.eventvenue,
      eventdate: req.body.eventdate,
      eventtime: req.body.eventtime,
      eventlink: req.body.eventlink,
      image: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
          contentType: 'image/png',
      },
      eventdescription:req.body.eventdescription,
      });

await Event.create(event);
console.log("db working");
res.redirect(`/event/${eventname}`);
});

module.exports=router;

