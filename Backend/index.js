const express = require("express");
const cors = require("cors");

var dotenv=require('dotenv')
dotenv.config()
require("./connection");
var task = require("./model");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here

//Write your POST API here
app.post("/add",(req, res)=>{
  try {
    task(req.body).save();
    res.send("added successfully");
  } catch (error) {
    console.log(error);
  }
})

app.get("/get", async (req, res) => {
  try {
    let data = await task.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    await task.findByIdAndDelete(req.params.id);
    res.send("blog Deleted");
  } catch (error) {
    console.log(error);
    
  }
})

app.put('/update/:id', async (req, res) => {
  try {
    await task.findByIdAndUpdate(req.params.id, req.body);
    res.send("blog Updated");
  } catch (error) {
    console.log(error);
    
  }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
