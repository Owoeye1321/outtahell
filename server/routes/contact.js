const validator = require('../controller/validator')
const express = require('express')
const router = express.Router()
const mysqlConnection = require('mysql')
const con = mysqlConnection.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'c-rentals',
  })
router.post('/',(req, res,next )=>{
    const validationRule ={
        "fname":"required|string",
        "lname":"required|string",
        "email" :"required|email",
        "phone":'required|phone',
        "subject": "required|string|",
        "message":"required|string"

    }
    validator(req.body, validationRule, {}, (err, status)=>{
        if(!status)
        {
            res.json({
                success:"false",
                message:"Invalid details",
                data:{err}
            })
        }else{

            const fname = req.body.fname
            const lname = req.body.lname
            const email = req.body.email
            const phone = req.body.phone
            const subject = req.body.subject 
            const message = req.body.message
            const sql = "INSERT INTO contact (fname, lname, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)";
            con.query(sql,[fname, lname, email, phone, subject, message,], (err, result)=>{
                if(!err){
                    res.send('success');
                    console.log(result)
                }else{
                    console.log(err)
                }
            })
           
        }
    })
    
})

module.exports = router