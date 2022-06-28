if (process.env.NODE_ENV !== "production") require("dotenv").config();
const uri = process.env.ATLAS_URI;

const router = require("express").Router();
const { MongoClient, ServerApiVersion } = require("mongodb");
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

router.post("/", (req, res) => {
  console.log(req.body);
  const sess = req.session;
  const username = req.body.username;
  const password = req.body.password;

  client.connect(async (err) => {
    console.log("mongodb database connected successfully");
    const collection = client.db("c_rentals").collection("users");
    const result = await collection.findOne({
      username: username,
      password: password,
    });
    if (result) {
      sess.username = username;
      res.send("success");
      console.log("user exist");
    } else {
      res.send("invalid");
      console.log("user does not exist");
    }

    client.close();
  });
});

module.exports = router;
