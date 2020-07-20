var mongoose = require('mongoose'); 
  
var imageSchema = new mongoose.Schema({ 
    name: String, 
    desc: String, 
    img: 
    { 
        data: Buffer, 
        contentType: String 
    } 
}); 
  
//Image is a model which has a schema imageSchema 
  
const Image=mongoose.model('Image', eventSchema);
module.exports= Image;
