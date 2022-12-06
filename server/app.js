var express = require("express");
var cors = require("cors");
var app = express();
var phones = require("./public/phones.json");

app.use(cors());

app.get("/api/phones", function (req, res) {
  res.send(phones);
});

app.listen(8000, () => {
  console.log(`App running...`);
});
