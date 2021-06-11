const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
//mongodb+srv://admin:admin@restapi.jrvbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended : true}))

// routes
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.send("Hello / request ");
});

app.use("/posts", require("./routes/posts"));

// connect to database
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err;
    console.log('Db connected! ')
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(" Server listenting at port 5000");
});
