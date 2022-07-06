
// this is the code for ./models.js
  
const mongoose = require('mongoose');
  
const imageSchema = new mongoose.Schema({
            email: String,
            phone: String,
            address: String,
            image:
            {
                data: Buffer,
                contentType: String
            }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('Image', imageSchema, "admin_profile");