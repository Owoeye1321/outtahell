if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb')
   const validator = require('../controller/validator')
      const router = require('express').Router()
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.post('/',(req, res) =>{
   console.log(req.body)
   const sess = req.session
      const username = req.body.username
     const email = req.body.email
   const password = req.body.password

   const details = {
      username:username,
          email:email,
       password:password
   }
   const validationRule ={
      "username":'required|string',
      "email" :"required|email",
      "password": "required|min:8"
  }
  validator(details, validationRule, {}, (err, status)=>{
     if(!status){
           console.log('An error has occured')
                 console.log(err)
        res.json({
           success:"false",
             message:"Invalid details",
          data:{err}
     })
     }else{

client.connect(async err => {
   console.log('mongodb database connected successfully')
      const collection = client.db("c_rentals").collection("users");
         const check = await collection.findOne({username:username})
         if(check){
            res.send('exist')
            console.log('user already exist')
         }else{

            const result  = await collection.insertOne({username:username, email:email, password:password})
            if(result){
                   sess.username = username
                      console.log('user saved')
                 res.send('success')
                 
            }else{
               res.send('invalid')
               console.log('unable to save new user')
            }
         }


      client.close();
      });
  
     }
  })


   

})

module.exports = router



