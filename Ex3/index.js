const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
var session = require('express-session')
var cookieParser = require('cookie-parser')

const oneHour = 1000*60*60;

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(session({
  secret: "SecretKeyIsEnCrypt",
  saveUninitialized: true,
  cookie: {maxAge: oneHour},
  resave: false,
  name: "token"
}))
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:3000'
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true }));
// parse application/json
app.use(bodyParser.json());

//connect to mongoDB
require('./configs/db')();

app.use(require('./routes'))

app.listen(process.env.PORT || 3001, () => console.log('App avaiable on http://localhost:3001'))

