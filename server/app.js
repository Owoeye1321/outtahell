const express = require("express");
const port = process.env.PORT || 1000;
const app = express();
const cookieparser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cookieparser);

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
app.use("/forgetpassword", require("./routes/forgetpassword"));
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));
app.use("*", (req, res) => {
  res.send("<center><h1>404! page not found!</h1></center>");
});

app.listen(port, () => {
  console.log("listening to port 1000");
});
