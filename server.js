const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3080;
const axios = require('axios');
const cors = require('cors');
app.use(cors());
const uri = "mongodb+srv://ajay:ajay123@cluster0.0bjypqx.mongodb.net/?retryWrites=true&w=majority/"
mongoose.set('strictQuery', true);
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Connected to db");
  }
});

const Model = require('./models/model');


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.static(path.join(__dirname, './client/dist')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
  console.log(res);
});

app.get('/data', async (req, res) => {
  try {
    const model = await Model.find()
    res.json(model)
  } catch (err) {
    console.log(err)
  }
});

app.post('/data', async (req, res) => {
  // console.log("this is cell data",req.body);
  const model = new Model({
    cellData: req.body,
  })
  try {
    const a1 = await model.save();
    res.json(a1);
  }
  catch (err) {
    res.send(err);
  }
  
})
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});



