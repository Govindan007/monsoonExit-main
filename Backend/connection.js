const mongoose = require("mongoose");
require('dotenv').config();
//Write missing code here
var url=process.env.mongodb_url;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

