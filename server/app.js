const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
app.use(bodyParser.json());
app.use(express.json())
const path = require('path')
//const fileUpload = require("express-fileupload");
//const path = require('path')
const PORT = process.env.PORT || 9000;

// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.resolve(__dirname, '../../src/assets/admin_pictures')));
app.use(express.static( path.resolve(__dirname,  '../../src/assets/hostel_pages')));
// calling body-parser to handle the Request Object from POST requests
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    cookie: {
      secure: true,
      maxAge: 60000,
    },
    secret: "OwoeyeSamuelOlamide",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
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

app.all("*", (req, res) => {
  res.send("Hello there, you seem to be lost on this server");
});
// app.use(
//   fileUpload()
// );

app.listen(PORT, () => {
  // console.log(path.resolve('../src/assets/images'))
  console.log("Listening to port" + " " + PORT);
});
