
// this is the code for ./models.js
  
const mongoose = require('mongoose');
  
const imageSchema = new mongoose.Schema({
            username: String,
            email: String,
            address:
             {
                type: String,
                max:200
            },
            phone: String,
            image:
            {
                data: Buffer,
                contentType: String
            }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = profileModel = mongoose.model('admin_profile', imageSchema);