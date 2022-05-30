if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb')
      const router = require('express').Router()
      const nodemailer = require('nodemailer')

router.post('/',(req, res) =>{
  
   
   async function main() {

         const fname = req.body.data.fname
               const lname = req.body.data.lname
                  const email = req.body.data.email
                const phone = req.body.data.phone
            const subject = req.body.data.subject 
     const message = req.body.data.message

        
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
               from:email, // sender address
                    to: "Owoeye1321@gmail.com", // list of receivers
                        subject: subject, // Subject line
                   html:`<h1>Hello C -Rentals</h1> <h5>I'm ${fname + lname} </h5>  <h6>${message} \n  ${phone}</h6>` // plain text body
              
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
      });

module.exports = router






            
            
         