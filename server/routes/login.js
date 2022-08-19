const router = require('express').Router()
const client = require('../controller/client')
const userModel = require('../model/userModel')

router.post('/', (req, res) =>{
   console.log(req.body)

         const username = req.body.username
    const password = req.body.password

    const login = new userModel({
      username:username,
      password:password,
  })
  //checking if a user exist
      userModel.exists({username:username}, (err, result)=>{
         if(result){
            req.session.username = username
               req.session.save(( sessionError , sessionResult )=>{  
                  if(!sessionError){
                     res.send('success')
                   console.log('The user exist')
                   console.log('The session is set',req.session)
                  }
                 
               })
         }else{
            res.send('invalid')
            console.log('The user does not exist')
         }
      })

})

module.exports = router

