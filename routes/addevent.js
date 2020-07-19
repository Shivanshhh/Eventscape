const express = require('express');
const router = express.Router();
const Event = require('../models/eventschema');

router.get("/", (req, res) => {
  res.render("add-event.ejs");
});

router.post('/', async (req,res) =>{
  const newDoc= await Event.create(req.body);
  console.log("DB Working")
  res.redirect("/event")
  });

module.exports=router;

