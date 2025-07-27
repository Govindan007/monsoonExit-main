//Write missing codes here
var mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

//Write missing codes here
var taskmodel = mongoose.model("task", taskSchema)
module.exports = taskmodel;