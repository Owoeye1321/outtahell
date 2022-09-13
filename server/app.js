require('dotenv').config();
   const uri = process.env.ATLAS_URI_FOR_OWOEYE
   require('./controller/client')


const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo');
const app = express()
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser())
app.use(cors())
const path = require('path')
//const fileUpload = require("express-fileupload");
//const path = require('path')
const PORT = process.env.PORT || 9000;

// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.resolve('./public')));
app.use(express.static( path.resolve('./public')));
// calling body-parser to handle the Request Object from POST requests
const oneDay = 1000 * 60 * 60 * 24;
app.set('trust proxy', 1)
app.use(session({
  proxy:true,
  secret:"OwoeyeSamuelOlamide",
  saveUninitialized:false,
  resave:false,

  cookie:{        
    maxAge:oneDay
   },  
  store: MongoStore.create({
    mongoUrl: uri,
    dbName: "c_rentals",
    stringify: true,
    autoRemove:'native'
  })
}))
app.use(function(req,res,next){
  if(!req.session){
      return next(new Error('Oh no')) //handle error
  }
  next() //otherwise continue
  });
//app.use('/testingImage', require('./routes/testingImage'))
app.use("/forgetpassword", require("./routes/forgetpassword"));
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));
app.use("/dashboard", require("./routes/contact"));
app.use("/adminProfile", require("./routes/uploadProfile"));
app.use("/check", require("./routes/check"));
app.use("/read", require("./routes/readProfile"));
app.use('/logOut', require('./routes/logOut'))
app.use('/addHostelDetails', require('./routes/addHostelDetails'))
app.use('/getAllHostelInfo', require('./routes/fetchAllHostelDetails'))
app.use('/personalGallery',require('./routes/postPersonal'))



// app.use(
//   fileUpload()
// );
app.get('/',(req, res)=>{
  res.send('Hello world')
})


app.all('*',( req, res)=>{
  res.send('Hello there, you seem to be lost on this server')
})

app.listen(PORT, () => {
  console.log(path.resolve(__dirname, './public'))
  console.log("Listening to port" + " " + PORT);
});
