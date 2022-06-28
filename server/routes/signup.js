   const validator = require('../controller/validator')
      const router = require('express').Router()
       const client = require('../controller/client')   

router.post('/',async (req, res) =>{
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
      
      const signUp = async()=>{
         const collection = client.db("c_rentals").collection("users");
         const check = await collection.findOne({username:username})
         if(check){
            res.send('exist')
            console.log('user already exist')
         }else{
 
            const result  = await collection.insertOne({username:username, email:email, password:password})
            if(result){
               const collection = client.db("c_rentals").collection("admin_profile")
               const resultProfile = await collection.insertOne({username:username, email:email, password:password})
               if (resultProfile) {
                  console.log('added a new profile')
               } else {
                  console.log('unable to add a new profile')
               }
                   sess.username = username
                      console.log('user saved')
                 res.send('success')
                 
            }else{
               res.send('invalid')
               console.log('unable to save new user')
            }
         }

     
      }
      signUp()
  
     }
  })


   

})

module.exports = router



