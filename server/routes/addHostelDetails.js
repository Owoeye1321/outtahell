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
            const sess = req.session
            const username = sess.username
          console.log(JSON.parse(req.body.data))
             console.log(req.file)
        if(username){
            const data = JSON.parse(req.body.data)
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
            console.log('User authentication needed')
        }
       
        })
        router.get('/', async ( req , res )=>{
            const sess = req.session
            const username = sess.username
            if(username){
                const allData = await hostelPosts.find({username:username})
                if(allData){
                    res.json(allData)
                    console.log('Data has been sent to the frontend')
                 //   console.log('All data has been sent', allData)
                }else{
                    console.log('Unable to locate data with the email')
                }
            }
        })
module.exports = router