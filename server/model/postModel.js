// this is the code for ./models.js

const mongoose = require('mongoose');
  
const imageSchema = new mongoose.Schema({
           username:String,
           hostelName:String,
           address: String,
           socialAmenities: String,
            image:
            {
                data: Buffer,
                contentType: String
            }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = hostelPosts = mongoose.model('hostelPosts', imageSchema);