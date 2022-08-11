const router = require('express').Router()
const nodemailer = require('nodemailer')
const userModel = require('../model/userModel')

router.post('/',async ( req, res ) =>{

const getMail = req.body.email
    const emailDetail = new userModel({
        email:getMail
    })
    const result = await userModel.find({email:getMail})
        if(result){
            console.log('Hello world, the shit is about to happen')
                console.log(result)
                       console.log('Processing the data to send Email')
                         result.map((key)=>{
                             const getPassword = key.password
                                 const to = getMail
                                     const from = 'owoeye1321@gmail.com'
                                      const subject = "Forget Passord"
                                   const text = `Your password is ${getPassword} `
                                
                                 async function main() {
                                    
                                        // create reusable transporter object using the default SMTP transport
                                            let transporter = await nodemailer.createTransport({
                                            host: "smtp.gmail.com",
                                                port: 465,
                                            secure: true, // true for 465, false for other ports
                                            auth: {
                                                user: "owoeye1321@gmail.com", // generated ethereal user
                                                pass: "Owoeye1234", // generated ethereal password
                                        }
                                        },(err, result)=>{
                                            if(!err)console.log(result);console.log(err)
                                        });
                                    // send mail with defined transport object
                                    let info = await transporter.sendMail({
                                    from:from, // sender address
                                            to: to, // list of receivers
                                                subject: subject, // Subject line
                                        html:text
                                    
                                    },(err, result)=>{
                                        if(!err){ console.log(result);res.send('success')}else{console.log(err)}
                                    }); 
                                
                                // console.log("Message sent: %s", info.messageId);
                                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                                
                                    // Preview only available when sending through an Ethereal account
                                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                                }
                                
                                main().catch(console.error);
                                                })
                                        
                                        res.send('success')
        }else{
                res.send('invalid')
                console.log('unable to get Email informations, the email provided is not a valid email')
         
        }

})

module.exports = router