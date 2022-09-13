const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const check =  path.resolve('../../src/assets/hostel_images')
const profileModel = require('../model/imageModel')
const validator = require('../controller/validator')
const { isValidPhone } = require('phone-validation')
const fs = require('fs')
// const upload = multer({ dest:path.resolve('../../src/assets/hostel_images')})
const storage = multer.diskStorage({
    destination:(req , file , cb )=>{
        cb(null , path.resolve('./public'))
    },
    filename: (req , file , cb)=>{
        cb(null , file.originalname)
    }
})

const upload = multer({storage:storage})

router.get('/',(req , res)=>{
    res.send('Working tree clean')
    console.log('TADA ! Working on a new image solving bullshit')
    console.log(check)
})
router.post('/',upload.single('file'), (req , res)=>{

      const data = JSON.parse(req.body.data)
      if(data){
      const username = data.username
          const email = data.email
          const address = data.address
          const phone = data.phone

            const details = {
                      email : email,
                    address : address
                }

              const validationRule ={
                    "email":'required|email',
                    "address": "required|string|max:200"
                }

                validator(details, validationRule, {}, (err, status)=>{
                  if(!status){
                          console.log('An error has occured')
                                console.log(err)
                      res.send('error')
                    }else{
                    const validPhone = isValidPhone(phone);
                      if(validPhone === true){

                        const oldFilePath = req.file.path
                        const uploadFolder = path.resolve('./public' , req.file.filename)

                        console.log('Phone number is valid')
                        const extensionName = path.extname(req.file.filename); // fetch the file extension
                        const allowedExtension = ['.png','.jpg','.jpeg'];
                        console.log(extensionName , allowedExtension)
                        if(!allowedExtension.includes(extensionName)){
                          res.send('error')
                          console.log('invalid file type')
                        }else{
                          if(req.file.size > 50 * 1024){
                            res.send('error')
                            console.log('file too large')
                          }else{

                                  profileModel.exists({username:username} , (err , result )=>{
                                    if(result){
                                      console.log(result)
                                      profileModel.updateOne({username:username} , {$set:{
                                        email: email,
                                        address:address,
                                        phone:phone,
                                        image:{
                                            data:fs.readFileSync(path.resolve('./public/' + req.file.filename)),
                                            contentType:"image/png"
                                        }
                                      }} , (err , innerResult) =>{
                                        if(innerResult){
                                          res.send('success')
                                          console.log('profile has been updated successfully')
                                          console.log(innerResult)
                                        }else{
                                          console.log('unable to update profile')
                                        }
                                      })
                                    }else{
                                      console.log(username)
                                      console.log('The user profile could not be found')
                                    }
                                  })
                          }

                        }
                      }else{
                        console.log('Invalid phone number')
                      }

                    }
                })
      }
    
})

module.exports = router

