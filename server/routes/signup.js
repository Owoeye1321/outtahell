   const validator = require('../controller/validator')
const profileModel = require('../model/imageModel')
      const router = require('express').Router()
       const userModel = require('../model/userModel')
       const fs = require('fs')
       const path = require('path')

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
                  const signUp = new userModel({
                     username:req.body.username,
                     email: req.body.email,
                     password: req.body.password,
                 })
                 const profile = new profileModel({
                  username:req.body.username,
                  email: req.body.email,
                  address:"",
                  phone:"",
                  image:{
                        data:fs.readFileSync(path.resolve(__dirname ,'../../src/assets/admin_pictures/user.png')),
                        contentType:'image/png'
                  }
            
              })
              
               //checking if a user exist
                 userModel.exists({username:username}, (err, result)=>{
                  if(result){
                     res.send('exist')
                     console.log('file exist')
                  }else{
                     console.log('file does not exist')

                     //saving to sign up page
                       signUp.save().then((result)=>{
                           console.log('added a new profile')
                           console.log('file has been saved to database successfully')
                           
                     //saving to profile page
                     profile.save().then((innerResult)=>{
                        sess.username = username
                        console.log('user saved')
                            res.send('success') 
                           console.log('user profile has been updated')
                        }).catch((err)=>{
                           console.log(err)
                        })

                    }).catch((err)=>{
                     console.log(err)
                     res.send('invalid')
                    })
                    
                  }
                 })
                 
           
            
     }
  })
})

module.exports = router



