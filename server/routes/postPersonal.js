const router = require('express').Router()

    router.post('/', async ( req , res )=>{
        if(req.body){
            const username = req.body.username
            if(username){
                const allData = await hostelPosts.find({username:username})
                if(allData){
                    res.json(allData)
                  //  console.log('Data has been sent to the frontend')
                 //   console.log('All data has been sent', allData)
                }else{
                    console.log('Unable to locate data with the email')
                }
            }
        }
       
    })

module.exports = router