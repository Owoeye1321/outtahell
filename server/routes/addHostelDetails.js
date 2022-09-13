const router = require('express').Router()
const multer = require('multer')
const hostelPosts = require('../model/postModel')
const path = require('path')
const fs = require('fs')
const storage = multer.diskStorage({
    destination:(req , file , cb )=>{
        cb(null , path.resolve('./public'))
    },
    filename: (req , file , cb)=>{
        cb(null , file.originalname)
    }
})
const upload = multer({storage:storage})
        
        router.post('/' , upload.single('file') , (req, res)=>{
                const data = JSON.parse(req.body.data)
             console.log(req.file)
        if(data){
            const username = data.username
            const hostelName = data.hostel_name
            const address = data.address
            const socialAmenities = data.socialAmenities
            console.log(hostelName)
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
                                    const postData = new hostelPosts({
                                        username:username,
                                        hostelName:hostelName,
                                        address: address,
                                        socialAmenities: socialAmenities,
                                         image:
                                         {
                                            data: fs.readFileSync(path.resolve('./public/' + req.file.filename)),
                                            contentType:"image/png"
                                         }
                                    });
                                    postData.save().then((result)=>{
                                        res.send('success')
                                        console.log('Added a new file', result)
                                    }).catch((err)=>{
                                        console.log('An error has occured', err)
                                    })
                            
                          }
                      }
        }else{
            res.send('error')
            console.log('User authentication needed')
        }
       
        })
    
module.exports = router