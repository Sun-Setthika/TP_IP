const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true }));
// parse application/json
app.use(bodyParser.text());

//connect to mongoDB
require('./configs/db')();

app.use(require('./routes'))

app.listen(process.env.PORT || 3001, () => console.log('App avaiable on http://localhost:3001'))

