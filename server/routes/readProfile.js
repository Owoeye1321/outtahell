const router = require('express').Router()
const profileModel = require('../model/imageModel')

router.get('/', async (req, res) =>{
   const sess = req.session

   if(sess.username){
      const username = sess.username
      const profile = new profileModel({
         username: username
      })

      //checking if the profile of the user with the username
        const allData = await profileModel.find({username:username})
        if(allData){
         res.json(allData)
         console.log(allData)
         console.log('The data exist and it has been sent')
        }else{
         console.log('Unable to locate profile')
        }
      }else{
         res.send('invalid user')
         console.log('User authentication required')
      }
      
})

module.exports = router

