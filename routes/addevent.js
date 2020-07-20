const express = require('express');
const router = express.Router();
const Event = require('../models/eventschema');
var fs = require('fs'); 
var path = require('path'); 
var multer = require('multer'); 
  
var storage = multer.diskStorage({ 
  destination: (req, file, cb) => { 
      cb(null, './routes/uploads') 
  }, 
  filename: (req, file, cb) => { 
    cb(null, file.fieldname + '-' + Date.now())  
  } 
}); 
  
var upload = multer({ storage: storage }); 

router.get("/", (req, res) => {
  res.render("add-event.ejs");
});

router.post('/', upload.single('image'), async (req,res) =>{
  const event= new Event({
      eventname: req.body.eventname,
      fees: req.body.fees,
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
console.log("db working")
res.redirect("/event")
});

module.exports=router;

