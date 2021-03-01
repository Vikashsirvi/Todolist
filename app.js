//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = `it's Sunday!`;
      break;
    case 1:
      day = `it's Monday!`;
      break;
    case 2:
      day = `it's Tuesday!`;
      break;
    case 3:
      day = `it's Wednesday!`;
      break;
    case 4:
      day = `it's Thursday!`;
      break;
    case 5:
      day = `it's Friday!`;
      break;
    case 6:
      day = `it's Saturday!`;
      break;
  }
  res.render("list", { kindofDay: day });
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
