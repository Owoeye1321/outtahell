// const router = require('express').Router()
// const multer = require('multer')
// const path = require('path')
// const check =  path.resolve('../../src/assets/hostel_images')
// const imageModel = require('../model/imageModel')
// const fs = require('fs')
// const mongoose = require('mongoose')
// // const upload = multer({ dest:path.resolve('../../src/assets/hostel_images')})
// const storage = multer.diskStorage({
//     destination:(req , file , cb )=>{
//         cb(null , path.resolve('../../src/assets/hostel_images'))
//     },
//     filename: (req , file , cb)=>{
//         cb(null , file.originalname)
//     }
// })

// const upload = multer({storage:storage})

// router.get('/',(req , res)=>{
//     res.send('Working tree clean')
//     console.log('TADA ! Working on a new image solving bullshit')
//     console.log(check)
// })
// router.post('/',upload.single('profilePicture'), (req , res)=>{d
//     console.log(req.file.originalname)
//     const saveImage = new imageModel({
//         username:req.body.username,
//         email: req.body.email,
//         password: String,
//         address: req.body.address,
//         description: req.body.description,
//         image:{
//             data:fs.readFileSync(path.resolve('../../src/assets/hostel_images/' + req.file.filename)),
//             contentType:"image/png"
//         }
//     })
//         console.log('connected to database')
//         saveImage.save().then((res)=>{
//             console.log('image is saved')
//         }).catch((err)=>{
//             console.log(err, 'error has occured')
//         })
// })

// module.exports = router
















// const client = require('../controller/client')   
//     const router = require('express').Router()
//     const path = require('path')
//     const formidable = require('formidable');
//     const validator = require('../controller/validator')
//     const { isValidPhone } = require('phone-validation')
//     const fs = require('fs')


//     router.post('/',(req, res, next)=>{
//       const sess = req.session
//       const username = sess.username
//       const form = new formidable.IncomingForm()
//       if(form){
//         form.multiples = false;
//            form.maxFileSize = 50 * 1024;
//                   form.parse(req, async(err, fields, files)=>{
//                     if(err){
//                       console.log('Error parsing the files')
//                       return res.status(400).json({
//                         status:"fail",
//                         message:"There was an error parsing the files",
//                         error:err,
//                       })
//                     }else{
//                       const data = JSON.parse(fields.data)
//                       console.log(data)
//                       const details = {
//                          email : data.email,
//                          address : data.address
//                       }
//                       const phone = data.phone
            
//                       const validationRule ={
//                         "email":'required|email',
//                         "address": "required|string|max:200"
//                     }
//                     validator(details, validationRule, {}, (err, status)=>{
//                        if(!status){
//                              console.log('An error has occured')
//                                    console.log(err)
//                           res.send('error')
//                        }else{
//                         const validPhone = isValidPhone(phone);
//                         if(validPhone === true){
//                           console.log('Processing details to save')
//                             const oldFilePath = files.file.filepath
//                             const uploadFolder = path.resolve('../src/assets/hostel_images' , files.file.originalFilename)
//                             const extensionName = path.extname(files.file.originalFilename); // fetch the file extension
//                               const allowedExtension = ['.png','.jpg','.jpeg'];
                              
//                               if(!allowedExtension.includes(extensionName)){
//                                 res.send('error')
//                                 console.log('Invalid file type')
//                               }else if(files.file.size > 50 * 1024){
//                                 res.send('error')
//                                 console.log('File too large')
//                               }else{
//                                   fs.rename(oldFilePath, uploadFolder, async(err)=>{
//                                     if(err){
//                                       res.send('error')
//                                       console.log('An error has occured uploading file')
//                                       console.log(err)
//                                     }else{
//                                       const imageName = "../../assets/hostel_images/" + files.file.originalFilename
//                                       const email =  data.email
//                                       const address = data.address
//                                         const collection = client.db("c_rentals").collection("admin_profile");
//                                           const updateOne = await collection.updateOne({username:username},
//                                             {$set:{imageName:imageName, email:email, address:address, phone:phone}})
//                                             if(updateOne){
//                                               res.send('success')
//                                               console.log('Process completed')
//                                               console.log('Updated profile successfully')
//                                             }else{
//                                               const result  = await collection.insertOne({imageName:imageName,username:username, email:email, address:address, phone:phone})
//                                               if(result){
//                                                    res.send('success')
//                                                       console.log('Profile saved to database')
//                                                       console.log('Process completed')
//                                                       console.log('Uploaded file successfully')
                                                   
//                                               }else{
//                                                  res.send('error')
//                                                  console.log('unable to save new user')
//                                               }
                                          
//                                             }
//                                     }
//                                   })
//                               }
            
//                           console.log(files.file.filepath)
                      
//                         }else{
//                           res.send('error')
//                           console.log('Invalid phone number')
//                         }
//                        }
//                     })
//                     }
            
//         })
//       }else{
//         console.log('Invalid form')
//       }


// })
// module.exports =  router