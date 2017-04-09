const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', index)


app.listen(3000, function() {
  console.log('App is running !');
})
