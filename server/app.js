const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.json())
const session = require('express-session')
const PORT = process.env.PORT || 9000

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  cookie:{
    secure: true,
    maxAge:60000
       },
  secret:"OwoeyeSamuelOlamide",
  saveUninitialized:true,
  cookie:{maxAge:oneDay},
  resave:false
}))
app.use('/forgetpassword', require('./routes/forgetpassword'))
app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))

app.all('*',( req, res)=>{
  res.send('Hello there, you seem to be lost on this server')
 })

 app.listen(PORT, () => {
  console.log('Listening to port' + ' ' + PORT)
})    