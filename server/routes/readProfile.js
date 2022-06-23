if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const router = require('express').Router()
   const { MongoClient, ServerApiVersion } = require('mongodb');
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.get('/',(req, res) =>{
   const sess = req.session
   if(sess.username){
      const username = sess.username
      console.log(username)
         client.connect(async err => {
         const collection = client.db("c_rentals").collection("admin_profile");
         const result = await collection.find({username:username}).toArray()
            if(result){
               res.json(result)
               console.log('working on result')
               result.map((key)=>{
                  console.log(key._id)
                        console.log(key.username)
                  console.log(key.email)
               })
            }else{
               console.log('an error has occured')
            }
         });
      }else{
         res.send('invalid user')
         console.log('User authentication required')
      }
      
})

module.exports = router

