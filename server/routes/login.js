const router = require('express').Router()
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
      userModel.exists({username:username,password:password}, (err, result)=>{
         if(result){
            res.send('success')
            console.log('Logged in successfully')
         }else{
            res.send('invalid')
            console.log('The user does not exist')
         }
      })

})

module.exports = router

